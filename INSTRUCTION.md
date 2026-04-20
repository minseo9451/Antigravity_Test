# [INSTRUCTION] Vibe Coding을 위한 게시판 프로젝트 지침서

이 문서는 Antigravity가 본 게시판 프로젝트를 성공적으로 수행하기 위해 준수해야 할 핵심 가이드라인입니다.

## 1. 코딩 원칙 (Coding Principles)
- **Clean Code**: 변수명과 함수명은 의도가 명확하게 명명하며, 가독성을 최우선으로 합니다.
- **Component-Driven**: 재사용 가능한 컴포넌트 단위로 개발하며, 스타일과 로직을 분리합니다.
- **Korean First**: 모든 사용자 메시지, 주석, 문서화는 한국어로 진행합니다.

## 2. 프론트엔드 아키텍처 (Frontend Architecture)
- **Framework**: Vite 기반의 React.
- **State Management**: React Hooks (useState, useEffect) 위주로 사용하며, 필요 시 Context API 활용.
- **API Client**: `axios.create()`를 사용하여 전역 인스턴스를 생성하고 관리합니다 (`src/api/axiosInstance.js`).
- **Environment Variables**: API Base URL 등 보안 및 환경 설정이 필요한 정보는 `.env` 파일을 통해 관리하며, Vite의 `import.meta.env` 방식을 사용합니다.
- **Styling**: Vanilla CSS 또는 CSS Modules를 사용하여 프리미엄 디자인을 구현합니다.

## 3. 디자인 시스템 및 심미성 (Design & Aesthetics)
- **Wow Factor**: 사용자가 첫눈에 만족할 수 있는 세련된 디자인(Gradients, Glassmorphism, Micro-animations)을 적용합니다.
- **Dark Mode**: 기본적으로 세련된 다크 모드 테마를 지향합니다.
- **Typography**: Google Fonts (Inter, Outfit 등)를 사용하여 전문적인 느낌을 줍니다.

## 4. API 통신 및 환경 설정
- **Axios Instance**: `axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })` 형식을 사용하여 기본 URL과 공통 헤더를 설정합니다.
- **Environment Variables**: `.env` 파일에 `VITE_API_BASE_URL=http://your-ec2-endpoint`와 같이 변수를 정의합니다.
- **RESTful standard**: HTTP Methods(GET, POST, PUT, DELETE)를 명확히 구분하여 사용합니다.
- **Async/Await**: 모든 비동기 로직은 `async/await` 패턴을 사용하여 작성합니다.
- **Error Handling**: 서버 에러 발생 시 사용자에게 명확한 안내를 제공하며, 브라우저 콘솔에 상세 로그를 기록합니다.

## 5. Vibe Coding 워크플로우
1. **Plan**: 기능을 개발하기 전 반드시 구현 계획을 수립하고 사용자 승인을 받습니다.
2. **Build**: 지침서에 명시된 스타일 가이드를 준수하여 코드를 작성합니다.
3. **Polish**: 기능 구현 후 디자인 디테일과 애니메이션을 추가하여 완성도를 높입니다.
4. **Verify**: 브라우저 도구를 사용하여 최종 결과물을 검증합니다.
