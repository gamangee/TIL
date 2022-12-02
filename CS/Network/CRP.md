# CRP

<aside>
💡 CRP(Critical Rendering Path)

</aside>

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

<aside>
📌 CRP 최적화 하는 방법

</aside>

1. DOM 조작 최소화
2. SSR → JS 번들링 최소화

<aside>
📌 Pure JavaScript에서 Lazy Loading을 구현 방법

</aside>

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
