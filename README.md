# 휴그린 웹사이트

React + Vite(JavaScript), 기본 CSS 프로젝트입니다. 현재 화면에는 준비 문구만 표시합니다.

## 실행

```bash
npm install
npm run dev
npm run build
npm run lint
```

Windows PowerShell에서 `npm` 실행이 제한되면 `npm.cmd`를 사용하세요.

## 폴더 구조

- `src/components/`: 공통 UI
- `src/pages/`: 페이지
- `src/styles/`: 공통 CSS와 디자인 변수
- `src/assets/`: 로컬 이미지·아이콘·폰트
- `public/`: 그대로 제공할 정적 파일

`DESIGN.md`는 확인된 Figma 디자인과 미확인 사항을 기록합니다. `AGENTS.md`는 이후 구현 지침입니다.

## Vercel 배포 설정

| 항목 | 값 |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

추후 클라이언트 라우팅을 추가하면 각 경로의 직접 URL 접속과 새로고침을 점검하세요.
# HUGREEN
