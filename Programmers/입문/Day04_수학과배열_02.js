// 문제 01.
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
function soltuion(n){
    var answer = 0;
    answer = Math.ceil(n/7);
    return answer;
}

// 문제 02.
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(n) {
  var answer = 0;
  
  function gcd(a,b){
      
  const remainder = a % b;
  if(remainder ===0) return b;
  return gcd(b, remainder)
      
  }
  
  answer = ((6 * n) / gcd(n,6))/6;
  return answer;
}

// 다른 사람 풀이
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}

// 문제 03.
// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(slice, n) {
  var answer = 0;
  answer = Math.ceil(n/slice)
  return answer;
}

// 문제 04.
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers){
  var answer = 0;
  for(let i=0; i<numbers.length; i++){
    answer += numbers[i];
  }
  return answer / numbers.length;
}

// 다른 사람 풀이
// reduce 사용하기
sum = numbers.reduce((a,b)=> (a,b,0))
answer = sum / numbers.length 
