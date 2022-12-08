// 문제 01. 주사위 개수
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
function solution(box, n) {
  let cnt = 1;
  for (let i = 0; i < box.length; i++) {
    cnt *= Math.floor(box[i] / n);
  }
  return cnt;
}

// 문제 02. 합성수 찾기
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = 0;
  let arr = Array(n)
    .fill()
    .map((_, item) => item + 1);
  let result = [];
  function factoring(n) {
    let count = 0;
    if (n === 1) return 1;
    for (let i = 0; i < arr.length; i++) {
      if (n % arr[i] === 0) {
        count += 1;
      }
    }
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(factoring(i + 1));
  }

  answer = result.filter((item) => item >= 3).length;

  return answer;
}

// 문제 03. 최댓값 만들기(1)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  let max = numbers[0] * numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j && max < numbers[i] * numbers[j]) {
        max = numbers[i] * numbers[j];
      }
    }
  }
  return max;
}

// 문제 04. 팩토리얼
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = 0;
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  for (let i = 1; i <= 10; i++) {
    if (n >= factorial(i)) {
      answer = i;
      continue;
    } else {
      break;
    }
  }
  return answer;
}
