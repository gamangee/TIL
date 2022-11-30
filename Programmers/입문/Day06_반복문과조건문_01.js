// 문제01. 문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = '';
  answer = [...my_string].reverse().join('');
  return answer;
}

// 다른 사람 풀이
// 단 1줄
const solution = (my_string) => my_string.split('').reverse().join('');

// 문제02. 직각삼각형 출력하기
// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

// Node.js 콘솔에서 입력 받는 방법

// 모듈 가져오기
const readline = require('readline');

// 입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
  }
});

// 문제 03. 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(num_list) {
  var answer = [];
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? (even += 1) : (odd += 1);
  }
  answer.push(even, odd);
  return answer;
}

// 다른 사람 풀이
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// 문제 04. 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, n) {
  var answer = '';
  let count = 0;
  let arr = my_string.split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].repeat(n);
  }
  answer = arr.join('');

  return answer;
}

// 다름 사람 풀이
// 단 1줄
function solution(my_string, n) {
  return my_string
    .split('')
    .map((v) => v.repeat(n))
    .join('');
}
