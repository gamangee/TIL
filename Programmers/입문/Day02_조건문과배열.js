// 문제1 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = 0;
  answer = (num1 / num2) * 1000;
  return parseInt(answer);
}

// 문제2 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
  var answer = 0;
  num1 === num2 ? (answer = 1) : (answer = -1);
  return answer;
}

// 문제3 분수의 덧셈
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(denum1, num1, denum2, num2) {
  var answer = [];
  let denum = num1 * denum2 + num2 * denum1;
  let num = num1 * num2;
  let maximum = 1;

  for (let i = 1; i <= denum; i++) {
    if (num % i === 0 && denum % i === 0) {
      maximum = i;
    }
  }
  answer = [denum / maximum, num / maximum];
  return answer;
}

// 문제4 배열 두 배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  var answer = [];
  for (let i = -0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

// map
function solution(numbers) {
  return numbers.map((i) => i * 2);
}

// `유틀리드 호제법`이란?
// 두 자연수 사이의 최대공약수를 구하는 알고리즘
function gcd(a, b) {
  const remainder = a % b; // 1번
  if (remainder === 0) return b; // 2번
  return gcd(b, remainder); // 3번
}
