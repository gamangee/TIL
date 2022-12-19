// 문제 01. 직사각형 넓이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
function solution(dots) {
  var answer = 0;
  let arr = dots.sort();
  let width = Math.abs(arr[1][0] - arr[3][0]);
  let height = Math.abs(arr[1][1] - arr[0][1]);
  answer = width * height;
  return answer;
}

// 문제 02. 캐릭터의 좌표
// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case 'left':
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case 'right':
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case 'up':
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case 'down':
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}

// 문제 03. 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] * numbers[j]);
      }
    }
  }
  return Math.max(...answer);
}

// 문제 04. 다항식 더하기
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
function solution(polynomial) {
  const countX = (x) => {
    const count = x.replaceAll('x', '');
    return count === '' ? 1 : +count;
  };

  const count = polynomial
    .split(' + ')
    .reduce(
      (a, c) =>
        c.includes('x')
          ? { ...a, x: a.x + countX(c) }
          : { ...a, num: a.num + +c },
      {
        x: 0,
        num: 0,
      }
    );

  const x = count.x > 0 ? `${count.x > 1 ? count.x : ''}x` : '';
  const num = count.num > 0 ? '' + count.num : '';
  const plus = x !== '' && num !== '' ? ' + ' : '';

  return x + plus + num;
}

// 다른 사람 풀이
function solution(polynomial) {
  const arr = polynomial.split(' + ');
  const xNum = arr
    .filter((n) => n.includes('x'))
    .map((n) => n.replace('x', '') || '1')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  return answer.join(' + ');
}
