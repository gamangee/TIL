// 문제 01. 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
  var answer = '';
  let arr = [...my_string];
  answer = arr.filter((item) => item !== letter);
  return answer.join('');
}

// 다른 사람 풀이
// split
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}

// 정규식
function solution(my_string, letter) {
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}

// Array.from
function solution(my_string, letter) {
  return Array.from(my_string)
    .filter((t) => t !== letter)
    .join('');
}

// 문제 02. 각도기
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
function solution(angle) {
  if (angle > 0 && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle > 90 && angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

// 다른 사람 풀이
// 1줄
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

// 문제 03. 양꼬치
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
function solution(n, k) {
  var answer = 0;
  let lamb = 12000;
  let cola = 2000;
  let service = 0;
  if (n >= 10) {
    service = Math.floor(n / 10);
  }
  answer = lamb * n + cola * k - cola * service;
  return answer;
}

// 다른 사람 풀이
// ~~ 연산자
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}

// 문제 04. 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}
// 다른 사람 풀이 I
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

// 다른 사람 풀이 II
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
