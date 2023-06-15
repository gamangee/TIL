function solution(numbers, n) {
    var answer = 0;
    for(let x of numbers){
        answer += x;
        if(answer>n){
            return answer;
        }
    }
   
}