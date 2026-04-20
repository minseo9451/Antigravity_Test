# [Walkthrough] REST API 게시판 프로젝트 구현 결과

이 문서는 React(Vite)와 Express(Node.js), MySQL을 연동한 게시판 프로젝트의 전체 구현 과정을 정리한 문서입니다.

## 1. 구현된 주요 기능
- **CRUD 게시판**: 게시글의 등록, 전체 목록 조회, 상세 조회, 수정, 삭제 기능 완비.
- **RESTful API**: Express를 활용하여 표준 HTTP 메서드(GET, POST, PUT, DELETE)를 지원하는 백엔드 구축.
- **MySQL 연동**: EC2 Docker 환경의 MySQL 데이터베이스(`myDb`)와 안정적인 커넥션 풀을 통한 연동.
- **프리미엄 디자인**: 다크 모드, Glassmorphism, 반응형 레이아웃이 적용된 고품질 UI.

## 2. 기술 스택 및 구조
### Frontend (`/src`)
- **React + Vite**: 빠르고 현대적인 프론트엔드 개발 환경.
- **Axios Instance**: `axios.create`를 사용하여 중앙 집중식 API 통신 관리 (`src/api/axiosInstance.js`).
- **State Management**: React Hooks를 활용한 효율적인 데이터 흐름 제어.

### Backend (`/backend`)
- **Express**: 가벼우면서 강력한 Node.js 서버 프레임워크.
- **MySQL2**: 비동기 처리를 지원하는 MySQL 클라이언트 라이브러리.
- **Auto-init DB**: 서버 시작 시 필요한 테이블(`posts`)을 자동으로 생성.

## 3. 작업 파일 요약
- **[PRD.md](./PRD.md)**: 제품 요구사항 및 상세 기획서.
- **[INSTRUCTION.md](./INSTRUCTION.md)**: 프로젝트 개발 지침 및 디자인 시스템 가이드.
- **[.env](./.env)**: 프론트엔드 API Base URL 설정.
- **[backend/.env](./backend/.env)**: 백엔드 DB 접속 및 포트 설정.
- **[src/App.jsx](./src/App.jsx)**: 메인 애플리케이션 로직.
- **[src/index.css](./src/index.css)**: 프리미엄 디자인 시스템 정의.
- **[backend/server.js](./backend/server.js)**: 백엔드 API 서버 로직.

## 4. 실행 방법
### Backend 실행
```bash
cd backend
npm run dev
```

### Frontend 실행
```bash
npm run dev
```

---
*이 문서는 Antigravity AI에 의해 생성되었습니다. 추가 기능 개발이나 수정이 필요하시면 언제든 말씀해 주세요!*
