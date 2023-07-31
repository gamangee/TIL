function solution(s) {
    var answer=[];
    let arr = [...s]
    arr.forEach((item)=>{
        if(arr.indexOf(item)===arr.lastIndexOf(item)){
            answer.push(item)
        }
    })
    return answer.sort().join("");
}