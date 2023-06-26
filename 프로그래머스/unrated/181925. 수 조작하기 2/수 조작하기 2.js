function solution(numLog) {
    var answer = '';
    for(let i=0; i<numLog.length; i++){
        if(numLog[i+1] - numLog[i] === -1){
            answer += 's';
        }else if(numLog[i+1] - numLog[i] === 1){
            answer += 'w';
        }else if(numLog[i+1] - numLog[i] === -10){
            answer += 'a';
        }else if(numLog[i+1] - numLog[i] === 10){
            answer += 'd';
        }
    }
    return answer;
}