// 문제 01. 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
function solution(numbers) {
  const strN = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  strN.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index);
  });

  return Number(numbers);
}

// 문제 02. 인덱스 바꾸기
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, num1, num2) {
  const result = [...my_string];
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join('');
}

// 문제 03. 한 번만 등장한 문자
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
function solution(s) {
  var answer = [];
  let arr = [...s];
  arr.forEach((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      answer.push(item);
    }
  });
  return answer.sort().join('');
}

// 문제 04. 약수 구하기
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
