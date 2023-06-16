// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    var answer = 0;
    const multifly = num_list.reduce((a,b)=>a*b,1);
    const pow = num_list.reduce((a,b)=>a+b,0)**2;
    if(multifly < pow){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}