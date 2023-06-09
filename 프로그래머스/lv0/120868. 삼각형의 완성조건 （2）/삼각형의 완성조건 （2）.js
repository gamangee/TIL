function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    
    for (let i=1; i<max; i++){
        if(i+min>max){
            answer++
        }
    }
    
    for(let i=max; i<(min+max); i++){
       if(min+max>i){
           answer++
       }
    }
    
    return answer;
}