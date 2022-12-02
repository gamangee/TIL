# DOM vs Virtual DOM

<aside>
📌 DOM(Document Object Model)

</aside>

`정의` HTML 문서를 브라우저가 이해할 수 있고, 메모리에 보관할 수 있는 객체의 트리 구조 형태로 구조화한 자료구조

`특징` 자바스크립트를 통해 동적으로 변경할 수 있으며 변경된 DOM은 렌더링에 반영된다.

`구성`

1. 문서 노드(Document Node) : 트리의 최상위 객체(=DOM tree의 시작점)
2. 요소 노드(Element Node) : HTML 요소
3. 어트리뷰트 노드(Attribute Node) : HTML 요소의 어트리뷰트
4. 텍스트 노드(Text Node) : HTML 요소의 텍스트(=DOM tree의 최종단)

`문제`

노드의 수↑ or DOM 조작↑ → 브라우저 렌더링↑ → 브라우저 성능, 속도↓

<aside>
📌 Virtual DOM

</aside>

`정의` 실제 DOM에서 처리하는 방식이 아닌 Virtual DOM과 메모리에서 미리 처리하고 저장한 후 실제 DOM과 동기화 하는 프로그래밍 개념

`장점` DOM을 최소한으로 조작하여 브라우저 성능 저하를 최소화한다.

<aside>
📌 DOM vs Virtual DOM

</aside>

|                              | DOM             | Virtual DOM                                                       |
| ---------------------------- | --------------- | ----------------------------------------------------------------- |
| 업데이트                     | 느리다          | 빠르다                                                            |
| HTML 업데이트 방식           | 직접            | 간접                                                              |
| 새로운 element 업데이트 방식 | 새로운 DOM 생성 | 새로운 가상 DOM 생성 후 이전 DOM과 비교하여 차이점 DOM만 업데이트 |
| 메모리                       | 낭비            | 낭비가 덜함                                                       |
