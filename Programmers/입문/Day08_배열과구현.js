// 문제 01. 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// 다른 사람 풀이
// for문
function solution(numbers, num1, num2) {
  var answer = [];
  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}

// 문제 02. 외계행성의 나이
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
function solution(age) {
  var answer = '';
  let ageArr = String(age).split('');
  for (let i = 0; i < ageArr.length; i++) {
    answer += String.fromCharCode(Number(ageArr[i]) + 97);
  }
  return answer;
}

// 한줄로
function solution(age) {
  return age
    .toString()
    .split('')
    .map((n) => String.fromCharCode(97 + Number(n)))
    .join('');
}

// 문제 03. 진료순서 정하기
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(emergency) {
  var answer = [];
  let sortArr = [...emergency].sort((a, b) => b - a);
  answer = emergency.map((item) => sortArr.indexOf(item) + 1);
  return answer;
}

// 문제04. 순서쌍의 개수
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}

// 다른 사람 풀이
function soltuion(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}

// 아스키코드
// 컴퓨터는 모든 데이터를 2진수로 변환하여 인식하고 저장하는데 이러한 규칙을 아스키 코드라고 한다.

// charCodeAt
// 문자 -> 아스키코드

// fromCharCode
// 아스키코드 -> 문자
