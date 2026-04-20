# [PRD] 간단한 REST API 게시판 프로젝트

## 1. 프로젝트 개요
이 프로젝트는 React(Vite)를 프론트엔드로, EC2에 설치된 MySQL을 백엔드로 사용하는 RESTful 기반의 게시판 시스템입니다. 사용자는 글을 등록, 조회, 수정, 삭제(CRUD)할 수 있습니다.

## 2. 주요 기능 (Core Features)
- **전체 글 목록 조회**: 서버로부터 모든 게시글 정보를 JSON 형식으로 받아와 리스트로 출력합니다.
- **상세 글 조회**: 특정 글번호(ID)를 기준으로 게시글의 상세 내용을 조회합니다.
- **게시글 등록**: 제목, 내용, 작성자 정보를 입력받아 서버에 저장합니다. (글번호는 MySQL Auto-increment 사용)
- **게시글 수정**: 기존 게시글의 제목과 내용을 수정합니다.
- **게시글 삭제**: 특정 게시글을 시스템에서 제거합니다.

## 3. 데이터 모델 (Data Model)
| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `id` | INT | 글번호 | Primary Key, Auto-increment |
| `title` | VARCHAR(255) | 제목 | 필수 입력 |
| `content` | TEXT | 내용 | 필수 입력 |
| `author` | VARCHAR(50) | 작성자 | 필수 입력 |
| `created_at` | DATETIME | 작성일 | 서버/DB 측 생성 시간 기본값 |

## 4. 기술 스택 (Tech Stack)
- **Frontend**: React (Vite 기반), Javascript
- **Communication**: Axios (REST API 호출, `axios.create` 인스턴스 사용)
- **Backend**: REST API (EC2 호스팅, MySQL DB 연동)
- **Configuration**: `.env` 파일을 통한 환경 변수 관리 (API Base URL 등)
- **Data Format**: JSON

## 5. UI/UX 요구사항
- **현대적인 디자인**: Vibe Coding 철학에 맞게 프리미엄하고 세련된 UI (Dark Mode 지원 등).
- **반응형 디자인**: 데스크탑과 모바일 모두에서 최적화된 레이아웃.
- **상태 관리**: 로딩 상태, 에러 처리, 성공 알림(Toast) 등 사용자 피드백 강화.
