function solution(a, b) {
    var answer = 0;
    if(Number(String(a)+String(b)) > a*b*2){
        answer = Number(String(a)+String(b))
    }else if(Number(String(a)+String(b)) === a*b*2){
        answer = Number(String(a)+String(b))
    }else{
        answer = a*b*2
    }
    return answer;
}