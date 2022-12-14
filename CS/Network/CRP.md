# 💡 CRP(Critical Rendering Path)

`정의` 서버에 HTML페이지를 요청하는 순간부터 브라우저가 내용을 화면에 표기하기까지의 단계

`과정`

Construction 과정

1. Request/Response : 브라우저가 서버에게 HTML 파일 요청
2. HTML 파싱 → DOM Tree
3. CSS 파싱 → CSSOM Tree
4. Javascript 파싱 → DOM + CSSOM → Render Tree(화면에 실제로 보이는 것만)

Operation 과정

1. Layout(reflow) : veiwport 내에서 요소들의 정확한 위치와 크기를 계산
2. Painting : 화면에 실제 픽셀로 그려지도록 변환
3. composite : 레이아웃 순서대로 화면에 출력

`참고` [csstriggers](https://csstriggers.com/)

# 📌 CRP 최적화 하는 방법

1. DOM 조작 최소화
2. 파일 크기 줄이기

   Webpack 사용 - 파일 용량 압축 및 번들링을 통한 파일 개수 감소

3. 초기 렌더링 최적화
   1. 리소스 우선순위 지정 : lazy loading
   2. SSR → JS 번들링 최소화

### 📌 CSS

1. CSS Contain 속성

   레이아웃 과정 중 reflow 시간을 단축

2. Graphics Layer

   기존 레이어에서 분리되어 별도로 렌더링 진행

3. CSS will-change

   즉각적인 변화가 예측될 때

### 📌 React

👉 컴포넌트 리랜더링 조건

- 부모에서 전달받은 `props`가 변경될 때
- 부모 컴포넌트가 리렌더링 될 때
- 자신의 `state`가 변경 될 때

👉 랜더링 최적화 방법

1. `React.memo` props의 변경 여부만을 체크
2. `useMemo` 함수의 연산량이 많을때 이전 결과값을 재사용
3. `useCallback` 함수가 재생성 되는것을 방지

👉 랜더링 성능 확인 방법

1. Lighthose : 웹 앱의 품질을 개선하는 오픈 소스 자동화 도구
2. DevTools
   1. Chrome : Performance-EvnetLog
   2. React Dev Tools : Profiler
3. console.log()

### 📌 Pure JavaScript에서 Lazy Loading을 구현 방법

1. `loading=lazy` : 중요하지 않은 이미지 지연시킬 때

   ```jsx
   <img src="image.png" loading="lazy">
   <iframe src="tutorial.html" loading="lazy"></iframe>
   ```

2. `Intersection Observer API`
3. `async` : JavaScript 리소스가 다운로드되는 동안 브라우저가 다른 작업을 수행할 수 있다.
4. `defer` : HTML 렌더링이 발생하는 동안 JavaScript 리소스가 다운로드할 수 있다.
5. `preload` : JavaScript 또는 CSS 파일을 미리 렌더링시킬 수 있다.

   ```jsx
   <link rel="preload" href="style.css" as="style">
   <link rel="preload" href="main.js" as="script">
   ```
