// 문제 01. 모음제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  // 01. 정규식
  // let answer;
  // let reg = /['a','e','i','o','u']/g;
  // answer = my_string.replace(reg,"")
  // return answer;

  // 02. includes()
  const vowels = 'aeiou';
  let answer = my_string
    .split('')
    .filter((el) => !vowels.includes(el))
    .join('');
  return answer;
}

// 다른 사람 풀이
// indexOf
function solution(my_string) {
  let answer = '';
  let eng = ['a', 'e', 'i', 'o', 'u'];
  my_string.split('').forEach((v) => {
    if (eng.indexOf(v) === -1) answer += v;
  });
  return answer;
}

// includes()
function solution(my_string) {
  var group = ['a', 'e', 'i', 'o', 'u'];
  return [...my_string].filter((el) => !group.includes(el)).join('');
}

// 문제 02. 문자열 정렬하기(1)
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
function solution(my_string) {
  let reg = /[a-z]/gim;
  return my_string
    .replace(reg, '')
    .split('')
    .map((item) => Number(item))
    .sort();
}

// 문제 03. 숨어있는 숫자의 덧셈(1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = 0;
  let reg = /[a-z]/gim;
  let nums = my_string
    .replace(reg, '')
    .split('')
    .map((item) => Number(item));
  answer = nums.reduce((acc, cur, idx) => {
    return (acc += cur);
  }, 0);
  return answer;
}

// 문제 04. 소인수분해
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  let divider = 2;
  while (n >= 2) {
    if (n % divider === 0) {
      answer.push(divider);
      n /= divider;
    } else {
      divider++;
    }
  }
  return [...new Set(answer)];
}
