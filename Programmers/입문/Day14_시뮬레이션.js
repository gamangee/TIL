// 문제 01. 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
function solution(array, n) {
  let ans = [];

  array.forEach((item) => {
    ans.push(Math.abs(item - n));
  });

  const min = Math.min(...ans);

  let check = [];

  for (let index = 0; index < ans.length; index++) {
    if (ans[index] === min) {
      check.push(array[index]);
    }
  }

  return Math.min(...check);
}

// 다른 사람 풀이
function solution(array, n) {
  const diffArr = array.sort((a, b) => a - b).map((val) => Math.abs(val - n));
  return array[diffArr.indexOf(Math.min(...diffArr))];
}

// 문제 02. 369게임
// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
function solution(order) {
  var answer = 0;

  let arr = String(order)
    .split('')
    .map((item) => Number(item));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 || arr[i] === 6 || arr[i] === 9) {
      answer += 1;
    }
  }
  return answer;
}

// 문제 03. 암호 해독
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
  var answer = [];
  let arr = cipher.split('');
  for (let i = 1; i <= arr.length; i++) {
    if (i % code === 0) {
      answer.push(arr[i - 1]);
    }
  }
  return answer.join('');
}

// 문제 04. 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = '';
  answer = [...my_string]
    .map((a) =>
      a.charCodeAt() >= 65 && a.charCodeAt() < 97
        ? a.toLowerCase()
        : a.toUpperCase()
    )
    .join('');
  return answer;
}
