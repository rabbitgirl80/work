import {
  admissionPrograms,
  admissionsSources,
  subjectLabels,
} from "./admissions-data.js";

const FIELD_LABELS = {
  all: "전체",
  physical_education: "체대/스포츠",
  physical_therapy: "물리치료",
};

const YEARS = ["2026", "2025", "2024"];
const SCORE_BASELINE = 82;

const currencyFormatter = new Intl.NumberFormat("ko-KR", {
  maximumFractionDigits: 1,
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toNumber(value, fallback = 0) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readForm() {
  const form = document.getElementById("admission-form");
  const formData = new FormData(form);
  const subjectGrades = {};

  Object.keys(subjectLabels).forEach((key) => {
    subjectGrades[key] = toNumber(formData.get(key), NaN);
  });

  return {
    year: formData.get("year") || "2026",
    field: formData.get("field") || "all",
    region: formData.get("region") || "all",
    subjectGrades,
    practicalScore: clamp(toNumber(formData.get("practicalScore"), 80), 0, 100),
    interviewScore: clamp(toNumber(formData.get("interviewScore"), 80), 0, 100),
    attendanceScore: clamp(toNumber(formData.get("attendanceScore"), 95), 0, 100),
  };
}

function weightedGrade(subjectGrades, weights) {
  const entries = Object.entries(weights);
  let weightedSum = 0;
  let totalWeight = 0;

  entries.forEach(([subject, weight]) => {
    const grade = Number.isFinite(subjectGrades[subject])
      ? subjectGrades[subject]
      : subjectGrades.overall;

    if (!Number.isFinite(grade)) return;
    weightedSum += clamp(grade, 1, 9) * weight;
    totalWeight += weight;
  });

  if (totalWeight === 0 && Number.isFinite(subjectGrades.overall)) {
    return clamp(subjectGrades.overall, 1, 9);
  }

  return totalWeight === 0 ? 9 : weightedSum / totalWeight;
}

function gradeToPercent(grade) {
  return clamp(100 - ((grade - 1) / 8) * 55, 45, 100);
}

function extraScoreAdjustment(config, input) {
  const practicalImpact = ((input.practicalScore - SCORE_BASELINE) / 18) * (config.practical / 100);
  const interviewImpact = ((input.interviewScore - SCORE_BASELINE) / 20) * (config.interview / 100);
  const attendanceImpact =
    ((input.attendanceScore - 95) / 20) * (config.attendance / 100);

  return practicalImpact + interviewImpact + attendanceImpact;
}

function calculateProgram(program, input) {
  const config = program.years[input.year] || program.years["2026"];
  const grade = weightedGrade(input.subjectGrades, config.subjectWeights);
  const recordPercent = gradeToPercent(grade);
  const totalScore =
    recordPercent * (config.record / 100) +
    input.practicalScore * (config.practical / 100) +
    input.interviewScore * (config.interview / 100) +
    input.attendanceScore * (config.attendance / 100);
  const adjustedGrade = grade - extraScoreAdjustment(config, input);
  const margin = adjustedGrade - config.benchmarkGrade;

  return {
    program,
    config,
    grade,
    adjustedGrade,
    margin,
    totalScore,
    risk: riskFromMargin(margin),
  };
}

function riskFromMargin(margin) {
  if (margin <= -0.35) {
    return {
      label: "안정",
      tone: "safe",
      message: "최근 기준선보다 여유가 있습니다. 최저/실기 조건만 다시 확인하세요.",
    };
  }
  if (margin <= 0.15) {
    return {
      label: "적정",
      tone: "match",
      message: "지원권에 가깝습니다. 전형별 환산점수와 경쟁률 추이를 확인하세요.",
    };
  }
  if (margin <= 0.55) {
    return {
      label: "소신",
      tone: "reach",
      message: "가능성은 있으나 실기, 면접, 최저 충족 여부가 중요합니다.",
    };
  }
  return {
    label: "상향",
    tone: "high-reach",
    message: "현재 입력값 기준으로는 도전권입니다. 추가 안전 지원군을 확보하세요.",
  };
}

function filterPrograms(input) {
  return admissionPrograms.filter((program) => {
    const fieldMatch = input.field === "all" || program.field === input.field;
    const regionMatch = input.region === "all" || program.region === input.region;
    return fieldMatch && regionMatch;
  });
}

function formatGrade(value) {
  return `${currencyFormatter.format(value)}등급`;
}

function formatPercent(value) {
  return `${currencyFormatter.format(value)}점`;
}

function sourceNames(program) {
  return program.sourceRefs
    .map((id) => admissionsSources.find((source) => source.id === id)?.name)
    .filter(Boolean)
    .join(", ");
}

function yearTrend(program) {
  return YEARS.map((year) => {
    const config = program.years[year];
    if (!config) return "";
    return `<span><strong>${year}</strong> ${formatGrade(config.benchmarkGrade)}</span>`;
  }).join("");
}

function renderRecommendation(result) {
  const { program, config, grade, adjustedGrade, margin, totalScore, risk } = result;
  const weightSummary = [
    ["교과", config.record],
    ["출결", config.attendance],
    ["실기", config.practical],
    ["면접", config.interview],
  ]
    .filter(([, value]) => value > 0)
    .map(([label, value]) => `${label} ${value}%`)
    .join(" · ");

  return `
    <article class="admission-card admission-card--${risk.tone}">
      <div class="admission-card__head">
        <div>
          <p class="admission-card__eyebrow">${FIELD_LABELS[program.field]} · ${program.region}</p>
          <h3>${program.university} ${program.department}</h3>
          <p>${program.track}</p>
        </div>
        <span class="admission-badge admission-badge--${risk.tone}">${risk.label}</span>
      </div>

      <dl class="admission-metrics">
        <div>
          <dt>대학식 예상 내신</dt>
          <dd>${formatGrade(grade)}</dd>
        </div>
        <div>
          <dt>실기/면접 보정</dt>
          <dd>${formatGrade(adjustedGrade)}</dd>
        </div>
        <div>
          <dt>${config.resultStatus}</dt>
          <dd>${formatGrade(config.benchmarkGrade)}</dd>
        </div>
        <div>
          <dt>예상 총점</dt>
          <dd>${formatPercent(totalScore)}</dd>
        </div>
      </dl>

      <p class="admission-card__message">${risk.message}</p>
      <p class="admission-card__detail">반영요소: ${weightSummary}</p>
      <p class="admission-card__detail">최근 3개년 기준선: ${yearTrend(program)}</p>
      <p class="admission-card__detail">주의: ${program.note}</p>
      <p class="admission-card__detail">확인자료: ${sourceNames(program)}</p>
      <div class="admission-card__foot">
        <span>기준선 대비 ${margin <= 0 ? "유리" : "불리"} ${formatGrade(Math.abs(margin))}</span>
        <a href="${program.officialUrl}" target="_blank" rel="noreferrer">공식 자료 확인</a>
      </div>
    </article>
  `;
}

function renderSummary(results, input) {
  const summary = document.getElementById("admission-summary");
  if (!summary) return;

  const counts = results.reduce(
    (acc, result) => {
      acc[result.risk.label] = (acc[result.risk.label] || 0) + 1;
      return acc;
    },
    { 안정: 0, 적정: 0, 소신: 0, 상향: 0 }
  );

  const best = results[0];
  const fieldLabel = FIELD_LABELS[input.field] || "전체";
  summary.innerHTML = `
    <div class="admission-summary__item">
      <span>검색 조건</span>
      <strong>${input.year}학년도 · ${fieldLabel}</strong>
    </div>
    <div class="admission-summary__item">
      <span>추천 분포</span>
      <strong>안정 ${counts["안정"]} · 적정 ${counts["적정"]} · 소신 ${counts["소신"]} · 상향 ${counts["상향"]}</strong>
    </div>
    <div class="admission-summary__item">
      <span>가장 가까운 지원권</span>
      <strong>${best ? `${best.program.university} ${best.risk.label}` : "결과 없음"}</strong>
    </div>
  `;
}

function renderResults() {
  const input = readForm();
  const resultEl = document.getElementById("admission-results");
  if (!resultEl) return;

  const results = filterPrograms(input)
    .map((program) => calculateProgram(program, input))
    .sort((a, b) => a.margin - b.margin);

  renderSummary(results, input);

  resultEl.innerHTML = results.length
    ? results.map(renderRecommendation).join("")
    : '<p class="empty-state">조건에 맞는 모집단위가 없습니다. 지역 또는 관심 계열을 바꿔보세요.</p>';
}

function resetExample() {
  const defaults = {
    overall: 3.4,
    korean: 3.2,
    math: 3.6,
    english: 3.1,
    social: 3.5,
    science: 3.8,
    pe: 2.2,
    practicalScore: 86,
    interviewScore: 82,
    attendanceScore: 96,
  };

  Object.entries(defaults).forEach(([name, value]) => {
    const input = document.querySelector(`[name="${name}"]`);
    if (input) input.value = value;
  });
}

function renderSources() {
  const sourceEl = document.getElementById("admission-sources");
  if (!sourceEl) return;

  sourceEl.innerHTML = admissionsSources
    .map(
      (source) => `
        <li>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a>
          <span>${source.note}</span>
        </li>
      `
    )
    .join("");
}

function bindSimulator() {
  const form = document.getElementById("admission-form");
  const sampleButton = document.getElementById("sample-student");

  if (!form) return;

  form.addEventListener("input", renderResults);
  form.addEventListener("change", renderResults);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults();
  });

  sampleButton?.addEventListener("click", () => {
    resetExample();
    renderResults();
  });

  renderSources();
  renderResults();
}

document.addEventListener("DOMContentLoaded", bindSimulator);
