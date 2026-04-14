# color-canvas-ui

색상 시스템, 타이포그래피, UI 컴포넌트를 한 번에 확인할 수 있는 Next.js 기반 디자인 쇼케이스 프로젝트입니다.

## 프로젝트 소개

`color-canvas-ui`는 디자인 토큰과 컴포넌트 스타일을 시각적으로 검증하기 위한 UI 실험 공간입니다.

- 색상 팔레트 및 상태 색상 시각화
- 타이포그래피 스케일 프리뷰
- 버튼/카드/입력 컴포넌트 갤러리
- 라이트/다크 테마 전환
- 라이브 테마 편집(Primary 컬러 조정)

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- `next-themes` (테마 관리)
- `chroma-js` (색상 계산)

## 시작하기

### 1) 의존성 설치

```bash
npm install
```

### 2) 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드 생성
- `npm run start`: 빌드 결과 실행
- `npm run lint`: ESLint 검사

## 페이지 구성

- `/`: 메인 랜딩 페이지
- `/colors`: 컬러 시스템 및 라이브 테마 에디터
- `/typography`: 타이포그래피 프리뷰
- `/components`: UI 컴포넌트 갤러리

## 프로젝트 구조

```text
src/
  app/          # 라우팅 및 페이지
  components/   # UI 및 레이아웃 컴포넌트
  lib/          # 유틸리티 및 훅
  styles/       # 전역 스타일
```

## 추후 작업

- 디자인 토큰 익스포트(JSON/CSS 변수/Tailwind preset)
- 컴포넌트 Playground 강화(variant/size/state 토글)
- 접근성 진단 패널(명도 대비, 포커스, aria 체크)
- 테마 프리셋 저장/불러오기/삭제(localStorage)
- 현재 테마 상태 URL 공유(쿼리 직렬화)
- 문서화 및 테스트 보강(Storybook/MDX, Playwright 스모크 테스트)
- 디자인 등 기본화면 따올 만한 것들 작업.