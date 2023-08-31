# 원티드 프리온보딩 2주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 2주차 과제을 다뤘습니다.
- 프리온보딩 선발과제인 todo를 팀원들과 상의해 각 기능의 Best Practice를 도출하고 합친 결과물입니다.

## 팀 구성원 및 역할

- 원티드 프리온보딩 프론트엔트 인턴쉽 12차 4팀입니다.

|                                     **강병헌**                                      |                                     **김누리**                                      |                                     **김신혁**                                      |                                      **박윤철**                                      |                                   **우혜리 (팀장)**                                   |                                      **이은학**                                      |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| <img width="180" alt="" src="https://avatars.githubusercontent.com/u/33623123?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/19181088?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/73675549?v=4"> | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/22779951?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/107099724?v=4" > | <img width="180" alt="" src="https://avatars.githubusercontent.com/u/52943412?v=4" > |
|                      [llbllhllk](https://github.com/llbllhllk)                      |                       [nuri1042](https://github.com/nuri1042)                       |                       [devshinn](https://github.com/devshinn)                       |                   [mrsimplelife](https://github.com/mrsimplelife)                    |                       [hyeri-woo](https://github.com/hyeri-woo)                       |                       [dmsgkr02](https://github.com/dmsgkr02)                        |

## 배포 링크

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

## 기능 상세

현재 README에는 동료학습을 통해 도출된 각 Assignment의 Best Practice을 포함되어 있습니다. 더 자세한 내용은 해당 <a href='https://www.notion.so/2-Issues-6fe48a7ac5744dc695b4e82ba3313095'>노션 링크</a>에서 확인하실 수 있습니다.
