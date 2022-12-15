// 문제 01. 문자열 안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 문제 02. 제곱 수 판별하기
//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);
  answer = sqrt % 1 === 0 ? (answer = 1) : (answer = 2);
  return answer;
}

// 문제 03. 세균 증식
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
function solution(n, t) {
  n *= Math.pow(2, t);
  return n;
}

// 문제 04. 문자열 정렬하기(2)
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string) {
  var answer = '';
  answer = my_string.toLowerCase().split('').sort().join('');
  return answer;
}
