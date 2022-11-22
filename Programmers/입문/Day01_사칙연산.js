// 문제1. 두수의 합
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = -1;
  answer = num1 + num2;
  return answer;
}

// 문제2. 두수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = 0;
  answer = num1 - num2;
  return answer;
}

// 문제3. 두수의 곱
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = 0;
  answer = num1 * num2;
  return answer;
}

// 문제4. 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = 0;
  answer = num1 / num2;
  return Math.floor(answer);
}

// 기억에 남는 문제 및 코드
// 4번. 다른 사람 풀이 -> parseInt 메서드 사용
function solution(num1, num2) {
  return parseInt(num1 / num2);
}
