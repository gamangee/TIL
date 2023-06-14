function solution(a, b) {
    var answer = 0;
    let x,y;
    x = String(a)+String(b);
    y = String(b)+String(a)
    if(x>y){
        answer = x
    }else if(x === y){
        answer = x
    }else{
        answer = y
    }
    return Number(answer);
}