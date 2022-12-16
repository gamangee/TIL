// 문제 01. 7의 개수
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
  var answer = 0;
  answer = array.join('').split(7).length - 1;
  return answer;
}

// 문제 02. 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(my_str, n) {
  var answer = [];
  let strArr = my_str.split('');

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(''));
  }

  return answer;
}

// 문제 03. 중복된 숫자 개수
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
function solution(array, n) {
  let answer = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

// 문제 04. 머쓱이보다 키 큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
function solution(array, height) {
  var answer = 0;
  answer = array.filter((item) => item > height).length;
  return answer;
}
