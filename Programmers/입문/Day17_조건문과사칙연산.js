// 문제 01. 숫자 찾기
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
function solution(num, k) {
  var answer = 0;
  let arr = String(num)
    .split('')
    .map((v) => Number(v));
  arr.indexOf(k) !== -1 ? (answer = arr.indexOf(k) + 1) : (answer = -1);
  return answer;
}

// 문제 02. n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
  var answer = [];
  answer = numlist.filter((item) => item % n === 0);
  return answer;
}

// 문제 03. 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = 0;
  answer = n
    .toString()
    .split('')
    .map((item) => Number(item))
    .reduce((sum, cur, arr) => {
      return (sum += cur);
    }, 0);
  return answer;
}

// 문제 04. OX퀴즈
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(quiz) {
  var answer = [];
  quiz.map((v) => {
    const [a, b] = v.split(' = ');
    return eval(a) === Number(b) ? answer.push('O') : answer.push('X');
  });
  return answer;
}
