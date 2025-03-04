😺 PPLOG<sup>●</sup> Frontend

팀 MYAONG의 프로젝트 **PPLOG** 프론트엔드 리포지토리입니다.

서비스 소개 및 공통 문서는 [organization 페이지](https://github.com/orgs/KEA-5th-Myaong)에서 확인하실 수 있습니다.

## 🧑‍💻 개발자 소개
|<img src="https://github.com/user-attachments/assets/53d3f3d5-6cef-400b-9be1-61bb78631321" width="150px" height="200px" />|<img src="https://github.com/user-attachments/assets/b2d1e09f-bb82-48ee-b3db-c5c6f192bf7b" width="150px" height="200px" />|<img src="https://github.com/user-attachments/assets/33a21583-674d-441d-9a91-808705b3792e" width="150px" height="200px" />|
|:---:|:---:|:---:|
|**김현중**|**곽서연**|**백지연**|
|Frontend Developer|Frontend Developer|Frontend Developer|
|[GitHub](https://github.com/kimgorok) | [GitHub](https://github.com/yeonilil) | [GitHub](https://github.com/BaekJiyeon02)|

## 🙋 역할 분담
### 김현중
- 로그인, 회원가입, 블로그 페이지, 모의 면접, 자기소개서 목록, 마이페이지, 메인 페이지, 관리자 메인/상세 페이지, 약관동의 페이지

### 곽서연
- 디자인, 랜딩 페이지, 포트폴리오 목록/작성/조회

### 백지연
- 자기소개서 작성/수정/상세보기, 헤더, 문의 공지 페이지, 관리자 기업 관리 페이지, 다크모드, 포스트 작성

## 🤖 개발 환경 설정

### ⚙️ Node 버전과 패키지 매니저
- Node.js: v14.6.0 이상
- 패키지 매니저: npm

## 🛠️ 기술 스택

#### 언어
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

#### 프레임워크

<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> 

#### 라이브러리

- **TanStack Query** (강력한 서버 상태 관리 및 데이터 동기화)
- **toast-ui/editor** (마크다운 에디터 컴포넌트)
- **dompurify** (XSS 공격 방지를 위한 HTML 정제)
- **react-hook-form** (폼 유효성 검사)
- **react-intersection-observer** (요소의 뷰포트 가시성 감지)
- **react-slick(slick-carousel)** (캐러셀 구현)
- **react-to-pdf** (PDF 다운로드 지원)
- **zustand** (로컬 상태 관리)

#### 데이터 프로세싱

- **axios** (HTTP 요청을 위한 Promise 기반 클라이언트)

#### 스타일링 및 애니메이션

- **Tailwind CSS** (유틸리티 기반 CSS 프레임워크)
- **framer-motion** (React 애플리케이션에 선언적 애니메이션을 추가하는 라이브러리)


#### 코드 포매터 및 검사 도구

<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> 

#### 협업툴

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white">

## ✏️ Convention

### Git Convention

- Git Flow 사용
- 개발 절차
    1. Jira에서 issue 생성 후 branch 생성
    2. add → commit → push → pull request
    3. code review
    4. pull request를 main branch로 merge
    6. 종료된 branch delete
- Branch : `#<Jira_label_Number>-<description>`
- Commit Message : `:gitmoji<prefix>: <title> \n <Description> \n [#<Issue_Number>]`

- Gitmoji
    
    | prefix | gitmoji | 의미 |
    | --- | --- | --- |
    | feat | `:sparkles:` (✨) | 새로운 기능 추가 |
    | feat | `:tada:` (🎉) | 새로운 기능 세팅 |
    | fix | `:bug:` (🐛) | 버그 수정 |
    | docs | `:memo:` (📝) | 문서 수정 |
    | style | `:lipstick:` (💄) | UI/UX 개선 작업 |
    | refactor | `:recycle:` (♻️) | 코드 리팩토링 |
    | test | `:test_tube:` (🧪) | 테스트 추가 또는 수정 |
    | chore | `:wrench:` (🛠) | 빌드 프로세스 또는 보조 도구 수정 |

## 이슈 보고하기

- 이슈를 보고하기 전에 이미 보고된 이슈인지 확인해주세요.
- 명확하고 설명적인 제목을 사용해주세요.
- 가능한 한 많은 관련 정보를 포함해주세요.

## 풀 리퀘스트 제출하기

1. 새로운 브랜치를 만드세요: `git checkout -b my-new-feature`
2. 변경사항을 커밋 컨벤션에 맞춰 add 후 커밋하세요: `git commit -m 'Add some feature'`
3. 브랜치에 푸시하세요: `git push origin my-new-feature`
4. 깃 허브에서 풀 리퀘스트를 제출하세요.
5. 코드 리뷰 요청 후 main 브랜치에 머지합니다.

## 코딩 컨벤션

- camelCase를 사용합니다.
- 상수의 경우 대문자 snake_case를 사용합니다.
- 컴포넌트명은 PascalCase를 사용합니다.
- 폴더명(페이지명)은 소문자로 시작하고 필요에 따라 하이픈을 사용합니다.
- 아이콘은 ic-파일명.ts로 public 폴더에 하나의 파일에서 관리합니다.
- 주석은 코드 위에 작성합니다.
