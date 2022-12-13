// 문제 01. 편지
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
function solution(message) {
  var answer = 0;
  answer = message.split('').length * 2;
  return answer;
}

// 문제 02. 가장 큰 수 찾기
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
  var answer = [];
  answer.push(Math.max(...array), array.indexOf(Math.max(...array)));
  return answer;
}

// 문제 03. 문자열 계산하기
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = 0;
  answer = eval(my_string);
  return answer;
}

// 문제 04. 배열의 유사도
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(s1, s2) {
  var answer = 0;
  answer = s1.filter((item) => s2.includes(item)).length;
  return answer;
}
