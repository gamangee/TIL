# 📌 var

- 중복 선언 허용 (재할당O, 재선언O)
- `함수 레벨 스코프` : 함수의 코드 블록만을 지역 스코프로 인정한다.
- 코드 블록 내에서 선언해도 모두 전역 변수가 된다. 이로인해 의도치 않게 전역 변수가 중복 선언되는 경우가 발생한다.

# 📌 let

- 변수 중복 선언 금지 (재할당O, 재선언X)
- `블록 레벨 스코프` : 모든 코드 블록을 지역 스코프로 인정한다.

# 📌 const

- 반드시 선언과 동시에 초기화 (재할당X, 재선언X)
- let과 동일하게 `블록 레벨 스코프`
- 변수에 객체를 할당할 경우 값을 변경할 수 있다.

### 일시적 사각지대(Temporal Dead Zone)란?

let 또는 const으로 선언했을 때, 선언 이전에 식별자를 참조할 수 없는 구역 (ReferenceError 발생)

스코프의 시작 시점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없는 구간

# 📌 var vs let vs const

|                 | var       | let       | const     |
| --------------- | --------- | --------- | --------- |
| 호이스팅        | O         | O         | O         |
| 재할당          | O         | O         | X         |
| 재선언          | O         | X         | X         |
| 초기화          | undefined | X         | X         |
| 일시적 사각지대 | X         | O         | O         |
| 스코프          | 함수 레벨 | 블록 레벨 | 블록 레벨 |
