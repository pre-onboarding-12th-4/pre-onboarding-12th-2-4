# 원티드 프리온보딩 2주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 2주차 과제을 다뤘습니다.
- 프리온보딩 선발과제인 todo를 팀원들과 상의해 각 기능의 Best Practice를 도출하고 합친 결과물입니다.

## 팀 구성원 및 역할

- 원티드 프리온보딩 프론트엔트 인턴쉽 12차 4팀입니다.

|                                     **강병헌**                                      |                                     **김누리**                                      |                                     **김신혁**                                      |                                      **박윤철**                                      |                                   **우혜리 (팀장)**                                   |                                      **이은학**                                      |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| <img width="180" alt="" src="https://avatars.githubusercontent.com/u/33623123?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/19181088?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/73675549?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/22779951?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/107099724?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/52943412?v=4" > |
|                      [llbllhllk](https://github.com/llbllhllk)                      |                       [nuri1042](https://github.com/nuri1042)                       |                       [devshinn](https://github.com/devshinn)                       |                   [mrsimplelife](https://github.com/mrsimplelife)                    |                       [hyeri-woo](https://github.com/hyeri-woo)                       |                       [dmsgkr02](https://github.com/dmsgkr02)                        |
|                                api 설정, redux 설정                                 |                            NotFound 페이지 및 기능 설정                             |                        이슈 목록 화면 무한 스크롤 구현, 배포                        |                                    공동 헤더 구현                                    |                     초기 프로젝트 환경 설정, 이슈 목록 화면 구현                      |                                   이슈 Detail 구현                                   |

## 배포 링크

https://pre-onboarding-12th-2-4.vercel.app/

## 프로젝트 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/pre-onboarding-12th-4/pre-onboarding-12th-2-4.git
```

2. 해당 폴더로 이동

```
cd pre-onboarding-12th-2-4
```

3. 프로젝트 패키지 설치

```
npm install
```

4. 프로젝트 실행

```
npm start
```

## 기술 및 개발 환경

### 사용 라이브러리

```js
"dependencies" : {
  "axios": "^1.2.2",
  "react-router-dom": "^6.15.0",
  "styled-components": "^6.0.7",
  "typescript": "^4.9.5"
}

"devDependecies" : {
    "eslint": "^8.47.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "prettier": "^3.0.2"
}
```

### Commit Message 컨벤션

| 태그 이름        | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| Initial          | 시스템 초기 설정                                                          |
| Feat             | 새로운 기능을 추가할 경우                                                 |
| Fix              | 버그를 고친 경우                                                          |
| Design           | CSS 등 사용자 UI 디자인 변경                                              |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| Refactor         | 프로덕션 코드 리팩토링                                                    |
| Comment          | 필요한 주석 추가 및 변경                                                  |
| Docs             | 문서를 수정한 경우                                                        |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                        |
| Merge            | 파일 또는 브랜치 병합할 경우                                              |
| Dir              | 폴더 및 문서 구조 변경할 경우                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |

### Eslint 설정

```js
{
  "extends": ["react-app", "eslint:recommended", "prettier"],
  "rules": {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
    "no-console": ["error", { "allow": ["warn", "error", "info"] }], // console.log() 금지
    "eqeqeq": "error", // 일치 연산자 사용 필수
    "dot-notation": "error" // 가능하다면 dot notation 사용
  }
}
```

### Prettier 설정

```js
module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름

  singleQuote: true, // single 쿼테이션 사용 여부
  jsxSingleQuote: true,
  quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
  jsxBracketSameLine: false,

  trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
  htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정

  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
};
```

## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜issue.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜Loader.tsx
 ┃ ┣ 📂issue
 ┃ ┃ ┣ 📜IssueDetail.tsx
 ┃ ┃ ┗ 📜IssueItem.tsx
 ┃ ┗ 📜Ad.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useScroll.ts
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┣ 📂pages
 ┃ ┣ 📜Detail.tsx
 ┃ ┣ 📜Issue.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂redux
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜issue.ts
 ┃ ┃ ┣ 📜issueDetail.ts
 ┃ ┃ ┗ 📜issueOption.ts
 ┃ ┣ 📜hooks.ts
 ┃ ┗ 📜store.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┗ 📜index.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

## UI

## 기능 상세

현재 README에는 동료학습을 통해 도출된 각 Assignment의 Best Practice을 포함되어 있습니다. 더 자세한 내용은 해당 <a href='https://www.notion.so/2-Issues-6fe48a7ac5744dc695b4e82ba3313095'>노션 링크</a>에서 확인하실 수 있습니다.

### Assignment 1-1: 이슈 목록 화면 API 활용

#### 이슈 목록 가져오기 API 활용

- axios instance를 정의해서 필요한 데이터만 추출
- 환경변수로 REACT_APP_GITHUB_TOKEN 관리하고 interceptors를 활용해 headers 설정
- redux-toolkit의 asyncThunk와 createSlice를 이용해 issueList 호출
- getIssue url과 getIssueDetail url을 나눠서 호출

- getIssue url

```
facebook/react/issues?per_page=${LOAD_DATA_LENGTH}&page=${page}&sort=comments
```

- getIssueDetail url

```
facebook/react/issues/${issueNumber}
```

### Assignment 1-2: 이슈 목록 화면

> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
> - 다섯번째 셀마다 광고 이미지 출력
> - 데이터 로딩여부 표시

- useSelector를 사용하여 isses 상태값을 불러옴
- Issue 페이지에서 map()을 사용하여 IssueItem 컴포넌트를 호출하고 issue 아이템을 props로 전달

#### open 상태의 이슈 중 코멘트가 많은 순으로 정렬

- api 호출 시 url의 params에 sort:'comments'를 추가해 정렬

#### 다섯번째 셀마다 광고 이미지 출력

- (index + 1) % 4 === 0 조건을 통해 <Ad /> 컴포넌트 렌더링

#### 데이터 로딩여부 표시

- redux state의 loading 값을 이용해 true일 시에는 로딩표시

### Assignment 1-3: 이슈 목록 화면 무한 스크롤

> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

- useScroll 커스텀 훅을 만들어 스크롤 위치에 따라 추가로 이슈 목록 호출

### Assignment 2: 이슈 상세 화면

> - 이슈 상세 화면으로 이동
> - 이슈의 상세 내용 표시
> - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

- Detail 페이지에서 redux의 fetchIssueDetail 액션을 dispatch 후 상세 내용 호출
- url: facebook/react/issues/${issueNumber} 로 상세페이지 api 호출

### Assignment 3: 공동 헤더

> - 두 페이지는 공통 헤더를 공유.
> - 헤더에는 Organization Name / Repository Name이 표시

- 추후에 organization/ repository가 바뀔 때를 대비해 redux에 해당 내용 저장
- redux의 organization/ repository 주소를 <Header /> 컴포넌트에 불러와 사용
