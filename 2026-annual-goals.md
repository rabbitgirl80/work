# 2026 연간 목표

> 최종 업데이트: 2026-06-02

---

## 시스템 입력용 (분기별)

---

### Q1

목표명
Master Templates 배포 완수 및 품질 확보

목표 수준
미완성 항목(Requirement #5, Preset 문서, 7-step 튜토리얼)을 완성하고 QA에 참여하여 Master Templates v1.0을 안정적으로 배포한 상태

주요 실행계획
Requirement #5 스펙 정의 및 디자인 작업
Preset 개념 문서 작성
7-step 튜토리얼 UI 완성
QA 참여 및 디자인 기준 위반 항목 수정
배포 후 팀 내 사용성 리뷰 세션 진행

---

### Q2

목표명
AI 생성·편집 연계 UX 및 Studio Design System 구축 기반 수립

목표 수준
AI 생성 결과물을 Studio 편집 경험으로 자연스럽게 연결하는 End-to-End UX 방향을 정의하고, PMR 제출에 활용 가능한 Design Principles · Visual Identity 문서 초안을 Wiki에 장착한 상태. Master Templates 배포 후 핵심 UI 패턴 리뷰를 통해 공통 UX 원칙 정리 착수

주요 실행계획
AI 생성 → 미리보기 → 편집 → 적용 End-to-End 플로우 정의
LPS 사용자 특성을 고려한 AI 활용 시나리오 도출
AI 생성 결과물을 운영 가능한 자산으로 연결하는 UX 검토
Design Principles 문서 초안 작성 및 Wiki 장착 (PMR No.10-1 증빙)
Visual Identity 문서 초안 작성 및 Wiki 장착 (PMR No.10-2 증빙)
Master Templates 배포 후 4주 시점 UX 리뷰 세션 진행

---

### Q3

목표명
AI 결과물 편집 가능 구조 설계 고도화 / Studio UX 일관성 기준 정립

목표 수준
AI 생성 결과물을 페이지·섹션·컴포넌트 단위로 편집 가능한 구조로 정리하고, Article·Master Templates 간 UX 패턴 비교 결과를 바탕으로 Studio 공통 UX 가이드를 수립한 상태. Studio Editor Patterns · Accessibility 문서가 PMR 연계 가능한 형태로 정착

주요 실행계획
AI 생성 결과물의 편집 모델 구조화 (페이지·섹션·컴포넌트 단위)
생성 결과의 수정·재활용 방안 설계
Studio Editor Patterns Wiki 섹션 신설 (툴바, 패널, 상태 표시, 액션 영역)
Article · Master Templates UX 패턴 비교 분석 및 불일치 항목 정리
신규 기능 적용 가능한 공통 UX 가이드 수립
Accessibility 문서 작성 및 Wiki 장착 (PMR No.17-6 증빙)

---

### Q4

목표명
통합 제작 경험 운영체계 확정 (Wiki · PMR · QA · Design System)

목표 수준
AI 생성·편집 연계 UX와 Studio Design System 기반이 실무 운영 프로세스에 정착되어, 생성·편집·검토·운영 전 과정을 팀이 일관된 기준으로 실행할 수 있는 상태. Design Wiki 전 섹션이 실제 구현과 동기화되고, PMR 증빙과 배포 QA 체크리스트가 정규 프로세스로 적용

주요 실행계획
Foundation · Design Principles · Visual Identity · Studio Editor Patterns · Accessibility 최종 정합성 검토
Figma ↔ Wiki 동기화 기준 확정 (반영 주기, 링크 규칙, 변경 알림 채널)
배포 시점 PMR 링크 등록 루틴 정착 (No.10, No.17, No.23)
Design QA 체크리스트 팀 합의 및 배포 프로세스 적용
AI 편집 연계 UX 프로토타입 고도화 및 운영 적용 기준 확정

---

---

## 목표 구분

- **G (Goal)** — 나 혼자 주도하는 개인 목표
- **T (Team)** — 동료와 함께 진행하는 공동 목표

---

## 개인 목표

---

### G1. Master Templates 배포 완수 및 품질 확보

**배경**
Article에 이어 Studio의 두 번째 핵심 기능. 공통 레이아웃을 하나의 원본으로 관리하는 구조로, 배포 품질이 이후 기능들의 UX 기준이 됩니다.

**목표 상태**
사용자가 마스터 템플릿을 생성·바인딩·동기화·Override하는 전체 플로우를 오류 없이 경험하고, 처음 사용하는 사람도 튜토리얼만으로 기능을 파악할 수 있는 상태.

**세부 항목**


| 항목                       | 현황                    | 할 일                          |
| ------------------------ | --------------------- | ---------------------------- |
| Requirement #5           | 제목·링크 없음 (incomplete) | 스펙 정의 및 디자인 작업               |
| Preset 개념 문서             | 링크 비어있음               | Blank 외 Preset 확장 고려해서 문서 작성 |
| 사용자 가이드 UI (7-step 튜토리얼) | 개발 중                  | 완성 및 QA 참여                   |
| Complete Modal 링크        | 배포 후 확인 필요            | 배포 시점에 URL 확인 및 반영           |


- Master Templates QA 참여 → 디자인 기준 위반 항목 수집 및 수정
- 배포 후 4주 실사용 피드백 수집 → v1.1 개선 스펙 정의

---

### G2. Studio Next Spec 발굴 및 디자인 선행 작업

**배경**
Article + Master Templates 이후의 흐름을 개발 착수 전에 디자이너가 먼저 정의하는 것이 목표.

- Master Templates 배포 후 UX 모니터링 → 개선 스펙 정의
- Article 기능 후속 개선 UX 검토 (데이터 연동 흐름, 에디터 패턴)
- Studio 에디터 전반의 UX 일관성 점검 및 개선 제안
- 신기능 사용 시나리오 기반 프로토타입 선행 작업

---

### G3. 디자인 Wiki 정비 — 배포 도구 + PMR 증빙 문서화

**배경**
현재 Design Wiki는 Foundation 미완성 + Component 목록 수준에 머물러 있습니다. 동시에 PMR Release Check No.10(디자인 원칙, VI), No.17(접근성) 항목은 매 배포마다 증빙 링크가 필요한데, LandPress 자체 기준 문서가 없어 매번 "N/A(이전에 이미 적용됨)"으로 넘기고 있는 상태입니다. Wiki를 **배포 도구 + PMR 증빙 문서**로 동시에 활용할 수 있도록 정비합니다.

**목표 Wiki 구조**

```
12. Design
  ├── ➊ Foundation
  │     ├── Logo / Color / Typography ← 완성 필요
  │     ├── Layout (Breakpoint · Grid · 여백체계) ← 완성 필요
  │     ├── Spacing / Icon / Workspace
  ├── ➋ Component
  │     ├── 기존 23개 컴포넌트
  │     └── Empty State / Error State ← 신설
  ├── ➌ Studio Editor Patterns ← 신설
  │     ├── 에디터 레이아웃 구조
  │     ├── 상태 표시 패턴 (Binding / Override / Sync / AI 변경 하이라이트)
  │     ├── 온보딩·튜토리얼 패턴
  │     └── 인터랙션·애니메이션 가이드
  ├── ➍ Design Principles ← 신설 (PMR No.10-1 증빙)
  │     ├── LY 전사 원칙 중 LandPress 적용 항목
  │     ├── LandPress 서비스 고유 UX 원칙
  │     └── 원칙별 실제 적용 사례 (Figma 링크 + 캡처)
  ├── ➎ Visual Identity ← 신설 (PMR No.10-2 증빙)
  │     ├── LDS 대비 LandPress 커스텀 범위 명시
  │     ├── 컬러 · 타이포 · 아이콘 준수 여부 및 예외 처리 사유
  │     └── LandPress Content / Studio 브랜드 아이덴티티 기준
  └── ➏ Accessibility ← 신설 (PMR No.17-6 증빙)
        ├── LY 접근성 가이드라인 중 LandPress 적용 항목
        ├── 키보드 내비게이션 · 포커스 트랩 · ESC 처리 기준
        ├── 접근성 자동 스캔 현황 (landpress-insight.linecorp.com)
        └── 미적용 항목 및 예외 처리 사유
```

**PMR 연결 구조**


| PMR 항목                  | 현재              | 목표                             |
| ----------------------- | --------------- | ------------------------------ |
| No.10-1 디자인 원칙          | N/A(이전 적용)      | Checked + Design Principles 링크 |
| No.10-2 Visual Identity | N/A(이전 적용)      | Checked + Visual Identity 링크   |
| No.17-6 접근성             | Checked(근거 불명확) | Checked + Accessibility 링크     |


**우선순위**


| 시기    | 작업                                                                |
| ----- | ----------------------------------------------------------------- |
| Q1~Q2 | Foundation 미완성 항목(Typography, Layout) 완성                          |
| Q2    | Design Principles · Visual Identity 초안 (Master Templates 배포 전 완성) |
| Q3    | Studio Editor Patterns · Empty/Error State 신설                     |
| Q4    | Accessibility 완성 · 전체 정합성 검토                                      |


---

## 팀 공동 목표

---

### T1. Master Templates v1.0 안정 배포

사용자 가이드 완성 → QA → 배포까지 팀 전체가 함께 마무리하고, 배포 후 팀 내 사용성 리뷰를 진행합니다.

---

### T2. Studio 핵심 기능 UX 일관성 확보

Master Templates 배포 후 4주 시점에 팀 리뷰 세션을 진행합니다. Article·Master Templates에서 각자 다르게 구현된 툴바·패널·상태 표시 패턴의 불일치 항목을 수집하고, 다음 기능부터 적용할 공통 기준을 합의합니다.

**세부 항목**

- **에디터 레이아웃 영역별 UX 원칙 합의**

  | 영역        | 정리할 내용                  |
  | --------- | ----------------------- |
  | 상단 툴바     | 버튼 배치 우선순위, 저장/종료 동작 통일 |
  | 좌측 LNB 패널 | 패널 열림/닫힘 트리거 기준 통일      |
  | 중앙 캔버스    | 빈 상태(Empty State) UX 통일 |
  | 우측 속성 패널  | 섹션 구조 및 계층 기준 정의        |

- **상태 표시 UI 패턴 통일** — 바인딩 상태 표시바, Override 상태, Red Dot Indicator, 동기화 알림 패턴 기준 마련
- **온보딩·튜토리얼 패턴 표준화** — Popover 위치·방향 기준, Step 네비게이션 규칙, Skip/Finish 처리 원칙
- **검증 시점** — 배포 4주 후 팀 내 리뷰 세션 1회 진행, 불일치 항목 수집 후 우선순위화

---

### T3. Studio 디자인 기반 정비 — Wiki · 시스템 · 협업 체계

Design Wiki를 팀 전체의 배포 도구이자 PMR 증빙 문서로 만들고, 디자인–개발 간 협업 루틴을 정착시킵니다.

**담당 구분**


| 항목                                       | 주도  | 협력               |
| ---------------------------------------- | --- | ---------------- |
| Design Principles 문서 작성 (PMR No.10-1 증빙) | 나   | 동료 검토            |
| Visual Identity 문서 작성 (PMR No.10-2 증빙)   | 나   | 동료 검토            |
| Studio Editor Patterns 섹션 신설             | 나   | 동료 (AI 편집 패턴 반영) |
| Accessibility 문서 작성 (PMR No.17-6 증빙)     | 나   | —                |
| Figma ↔ Wiki 동기화 기준 합의                   | 공동  | —                |
| Design QA 체크리스트 작성                       | 공동  | —                |


**세부 내용**

- **PMR 증빙 문서 완성** — Design Principles, Visual Identity, Accessibility 문서 작성. 매 배포마다 PMR Release Check No.10·17 항목을 "N/A" → "Checked + Wiki 링크"로 전환
- **Studio Editor Patterns 신설** — 에디터 레이아웃 영역별 UX 원칙, 상태 표시 패턴(Binding / Override / Sync / AI 변경 하이라이트), 온보딩·튜토리얼 패턴, Empty/Error State 가이드
- **배포 루틴 정착**

  | 시점        | 작업                                  |
  | --------- | ----------------------------------- |
  | 배포 전      | Wiki 초안 작성 → 개발팀 검토                 |
  | 배포 당일     | PMR Release Check 상세 결과에 Wiki 링크 등록 |
  | 배포 후 2주 내 | 실제 구현 반영 후 확정                       |

- **Figma ↔ Wiki 동기화 기준 합의** — 컴포넌트 업데이트 반영 주기, Wiki 내 Figma 링크 기준, 변경 알림 채널 지정
- **Design QA 기준 문서화** — LandPress 기준 Design QA 체크리스트 작성, PMR No.23 항목 구체화

**성과 지표**

- PMR No.10, No.17 항목 전부 "Checked + 링크" 상태로 전환
- Studio Editor Patterns 섹션 1차 배포 완료
- Design QA 체크리스트 팀 합의 및 적용

---

### T4. AI 생성·편집 연계 UX 및 Studio Design System 구축

AI가 생성한 템플릿·디자인을 완성본이 아닌 편집 가능한 초안으로 제공하고, LPS Studio의 기존 편집 경험과 자연스럽게 연결되는 통합 제작 흐름을 설계합니다. 또한 Studio 핵심 UI 패턴과 디자인 자산을 체계화해, AI 도구 활용 방식과 무관하게 일관된 UX 품질을 유지할 수 있는 기반을 구축합니다.

**핵심 플로우**

```
AI 템플릿 생성
  → 생성 결과 미리보기
  → 편집툴에서 열기 ("이 템플릿으로 시작하기")
  → 섹션/컴포넌트/스타일 세부 수정
  → [선택] 특정 영역만 AI로 재수정
  → 변경 전/후 비교 · 부분 적용 · 되돌리기
  → 운영 적용 및 배포 준비
```

**세부 설계 항목**


| 항목            | 내용                                            |
| ------------- | --------------------------------------------- |
| 편집 가능 단위 정의   | 페이지·섹션·컴포넌트·텍스트·이미지·스타일 단위로 AI 결과물 구조화        |
| 편집툴 진입 UX     | "편집툴에서 수정하기" 등 자연스러운 진입점과 액션 구조 정의            |
| 수정 방식 역할 구분   | 프롬프트 수정 vs 직접 편집 vs 선택 영역 AI 수정의 적합한 작업 범위 구분 |
| 선택 영역 AI 수정   | 특정 섹션·컴포넌트 선택 후 해당 영역만 AI로 재수정하는 인터랙션         |
| 전/후 비교 UX     | 변경 영역 하이라이트, 변경 내용 요약, 부분 적용, 되돌리기, 버전 히스토리   |
| 기존 편집툴과 충돌 방지 | AI 기능과 기존 편집 기능의 진입점이 겹치지 않도록 액션 구조 정의        |
| 운영 자산 연계      | 생성 결과를 운영 가능한 템플릿/컴포넌트 자산으로 연결하는 기준 정의        |


**수정 방식 역할 구분표**


| 수정 방식       | 적합한 작업                                |
| ----------- | ------------------------------------- |
| 프롬프트로 수정    | 전체 분위기 변경, 레이아웃 재구성, 콘텐츠 톤 변경, 변형안 생성 |
| 편집툴로 직접 수정  | 텍스트·색상·이미지 교체, 버튼 위치·여백·섹션 순서 조정      |
| 선택 영역 AI 수정 | 특정 섹션 개선, 일부 컴포넌트 변형, 특정 문구 수정        |


**T3와의 연계**

- AI 변경 하이라이트·전/후 비교 등 신규 상태 표시 패턴 → T3 Studio Editor Patterns에 반영
- AI 편집툴 진입 UX의 컴포넌트 → Figma 라이브러리 및 Wiki 동기화 대상에 포함
- AI 생성 화면/패널의 핵심 UI 패턴 → Studio 공통 Design System 컴포넌트로 수렴

**성과 지표**

- AI 생성 → 편집툴 연계 UX 시나리오 1건 이상 도출
- AI 생성 결과물의 편집 가능 단위 정의
- 선택 영역 기반 AI 수정 인터랙션 정의
- 전/후 비교·부분 적용·되돌리기 UX 설계
- 프로토타입 제작 및 이해관계자 피드백 반영
- AI 활용 여부와 무관하게 동일 UX 품질을 유지하는 공통 가이드 적용

---

## 배포용 Design QA 체크리스트 (초안)

배포 시 PMR 문서 활용과 함께 실제 검수 항목으로 사용하는 체크리스트입니다. 각 릴리즈마다 체크 결과와 근거 링크(Wiki/Figma/Jira)를 함께 기록합니다.

| 구분 | 체크 항목 | 확인 기준 | 증빙 |
| --- | --- | --- | --- |
| UX 플로우 | 생성 → 미리보기 → 편집 → 적용 흐름이 끊김 없이 동작하는가 | 주요 시나리오 1회 이상 E2E 점검 | 시나리오 문서, 테스트 영상 |
| 편집 가능성 | AI 결과물이 페이지/섹션/컴포넌트 단위로 수정 가능한가 | 최소 3개 단위에서 수정/저장/재오픈 검증 | QA 로그, 화면 캡처 |
| 일관성 | Toolbar/Panel/Status/Action 패턴이 가이드와 일치하는가 | Studio Editor Patterns 기준 대조 | Wiki 링크, 비교표 |
| 상태 표시 | Binding/Override/Sync/AI 변경 하이라이트 상태가 명확한가 | 상태별 시각적 구분 및 설명 문구 확인 | Figma, 구현 화면 |
| 디자인 시스템 | 신규/변경 UI가 공통 컴포넌트·토큰을 준수하는가 | 하드코딩 스타일/임의 패턴 미사용 | 코드 리뷰, Story/Figma |
| 문서화 | Wiki가 실제 구현 상태와 동기화되어 있는가 | 배포 전 초안, 배포 후 2주 내 확정 | Wiki 변경 이력 |
| PMR 연계 | PMR No.10/17/23 항목이 Checked + 링크로 제출되었는가 | N/A 사용 없이 근거 링크 등록 | PMR 제출본 |
| 운영성 | 생성 결과가 운영 자산으로 재활용 가능한 구조인가 | 템플릿 재사용/부분 복제 시나리오 검증 | 운영 가이드, QA 결과 |

---

## 전체 타임라인

```
Q1
  G1 Master Templates 완수
      배포를 앞둔 Master Templates의 미완성 항목
      (Requirement #5 스펙 정의, Preset 개념 문서,
      7-step 튜토리얼 UI)을 완성하고 QA에 참여.
      배포 후 실사용 피드백을 수집해 v1.1 개선 스펙 정의

  T1 Master Templates v1.0 안정 배포
      사용자 가이드 완성 → QA → 배포까지 팀 전체가
      함께 마무리. 배포 후 팀 내 사용성 리뷰 진행


Q2
  T4 AI 생성·편집 연계 UX 방향 정의
      AI 생성 결과물과 Studio 편집 경험을 연결하는
      End-to-End 플로우(생성 → 미리보기 → 편집 → 적용) 정의.
      LPS 사용자 특성을 반영한 시나리오 도출 및 운영 연계 검토

  T3 Design Principles · VI 문서 Wiki 장착
      PMR No.10 항목을 "N/A" 대신 "Checked + 링크"로
      제출할 수 있도록 문서 초안 작성 및 링크 체계 확정

  T2 핵심 UI 패턴 리뷰 착수
      Master Templates 배포 후 리뷰 세션을 통해
      툴바·패널·상태 표시 패턴 불일치 항목 수집 시작


Q3
  T4 AI 결과물 편집 가능 구조 설계
      페이지·섹션·컴포넌트 단위 편집 모델 정리,
      생성 결과의 수정/재활용 방식 설계,
      선택 영역 AI 수정 및 전/후 비교 UX 고도화

  T2 Studio 핵심 기능 UX 일관성 확보
      Article·Master Templates 기능 간 UX 패턴 비교 분석,
      불일치 항목 정리, 공통 UX 가이드 작성

  T3 Studio Editor Patterns · Accessibility 정착
      툴바·패널·상태 표시·액션 영역 기준을 Wiki로 문서화하고
      접근성 문서(PMR No.17-6 증빙)와 배포 루틴을 정착


Q4
  T4 통합 제작 경험 운영체계 확정
      AI 생성·편집 연계 UX와 Studio Design System을
      실무 운영 프로세스에 정착하고 적용 기준 최종 확정

  T3 Wiki · PMR · QA 루틴 정규화
      Wiki-구현 정합성 최종 점검, PMR No.10/17/23 링크 제출,
      배포용 Design QA 체크리스트를 팀 프로세스에 고정 적용

  G2 Next Spec 디자인 완성 및 핸드오프
      선행 설계 결과를 반영한 신기능 디자인 산출물 완성,
      공통 UX 가이드와 함께 개발 핸드오프
```

