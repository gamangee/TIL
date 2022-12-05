// 문제 01. 점의 위치 구하기
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
function solution(dot) {
  var answer = 0;
  if (dot[0] > 0) {
    if (dot[1] > 0) {
      answer = 1;
    } else {
      answer = 4;
    }
  } else {
    if (dot[1] > 0) {
      answer = 2;
    } else {
      answer = 3;
    }
  }
  return answer;
}

// 다른 사람 풀이
// 비교적 깔끔한 풀이
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// 문제 02. 2차원으로 만들기
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
function solution(num_list, n) {
  let answer = [];
  let arrCopy = [...num_list];

  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(arrCopy.splice(0, n));
  }
  return answer;
}
// 문제 03. 공 던지기
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
function solution(numbers, k) {
  let count = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length;

    if (k === count) {
      return numbers[i];
    }

    count += 1;
  }
}

// 문제 04. 배열 회전 시키기
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
function solution(numbers, direction) {
  var answer = [];
  if (direction === 'right') {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }
  return answer;
}
