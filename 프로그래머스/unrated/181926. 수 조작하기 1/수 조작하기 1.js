function solution(n, control) {
    var answer = 0;
    let controlArr = control.split("");
    for(let x of controlArr){
        if(x === "w"){
            n+=1
        }else if(x === "s"){
            n-=1
        }else if(x === "d"){
            n+=10
        }else if(x === "a"){
            n-=10
        }
    }
   
    return n;
}