# Minimal Blog — CMS Template Sample

Wix CMS 미니멀 블로그 템플릿(4페이지)을 정적 HTML로 재현한 샘플입니다.

## 페이지 ↔ Wix 매핑

| 파일 | Wix 페이지 타입 | URL |
|------|-----------------|-----|
| `index.html` | Static — Home | `/` |
| `blog.html` | Dynamic List — Blog | `/blog` |
| `post.html?slug=…` | Dynamic Item — Post | `/blog/{slug}` |
| `about.html` | Static — About | `/about` |

## 데이터 (CMS)

`posts.json` = **Posts** 컬렉션 샘플 (8건, `featured` 1건).

## 로컬에서 보기

`file://`로 열면 `fetch`가 막힐 수 있습니다. 이 폴더에서:

```bash
python3 -m http.server 3456
```

브라우저: http://localhost:3456

## GitHub

저장소: https://github.com/rabbitgirl80/work (경로: `minimal-blog/`)

## 디자인 토큰

`style.css`는 상위 `tokens.css`(LPC_2.0)를 import합니다.
