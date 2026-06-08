# 수시 Fit Lab — Admissions Simulator Sample

대한민국 수시 입시 지원 가능성을 빠르게 가늠하는 정적 HTML/JS 모의 프로그램입니다.
현재는 체대/스포츠 계열과 물리치료학과 중심의 초기 데이터셋을 포함합니다.

## 사이트명

**수시 Fit Lab** — 헤더, 푸터, 타이틀, `posts.json` 전역 사용.

## 페이지

| 파일 | Wix |
|------|-----|
| `index.html` | Home |
| `admissions.html` | 수시 가상지원 시뮬레이터 |
| `blog.html` | Blog (Dynamic List) |
| `post.html?slug=` | Blog post (Dynamic Item) |
| `about.html` | About |

## 입시 데이터

- `admissions-data.js`: 대학/학과/전형별 2024~2026 반영요소, 교과 가중치, 최근 기준선, 출처 URL
- `admissions.js`: 입력 성적을 대학별 가중치로 환산하고 안정/적정/소신/상향을 판정하는 로직

실제 지원 전에는 대입정보포털 어디가, 각 대학 입학처 모집요강, 대학별 환산점수 계산기로 반드시 검증해야 합니다.

## 미리보기

```bash
python3 -m http.server 3456
```

http://localhost:3456
