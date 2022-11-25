// 문제 01.
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
function soltuion(n){
    var answer = 0;
    answer = Math.ceil(n/7);
    return answer;
}

// 문제 02.
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

total / 6n =  count 

6 10
6 4

function gcd(a, b) {
    const remainder = a % b; // 1번
    if (remainder === 0) return b; // 2번
    return gcd(b, remainder); // 3번
  }


최대공약수 = 
최대공배수 = a * b /최대공약수
최소공배수/6

