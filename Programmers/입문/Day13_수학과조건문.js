// 문제 01. 컨트롤제트
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
function solution(s) {
  let result = s.split(' ');
  while (result.includes('Z')) {
    result.splice(result.indexOf('Z') - 1, 2);
  }
  return result.reduce((sum, cur) => {
    return (sum += Number(cur));
  }, 0);
}

// 다른 사람 풀이
function solution(s) {
  s = s.split(' ');
  let arr = [];
  for (let v of s) v === 'Z' ? (arr.length ? arr.pop() : '') : arr.push(v);
  return arr.reduce((a, v) => a + +v, 0);
}

// 문제 02. 배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

// 다른 사람 풀이
// 단 1줄
function solution(strlist) {
  return strlist.map((el) => el.length);
}

// 문제 03. 중복된 문자 제거
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

// 문제 04. 삼각형 완성 조건(1)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(sides) {
  var answer = 0;
  let sort = sides.sort((a, b) => b - a);
  sort[0] < sort[1] + sort[2] ? (answer = 1) : (answer = 2);
  return answer;
}

// 다른 사람 풀이
function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const sum = sides.reduce((a, b) => a + b, 0) - max;

  answer = max < sum ? 1 : 2;

  return answer;
}
