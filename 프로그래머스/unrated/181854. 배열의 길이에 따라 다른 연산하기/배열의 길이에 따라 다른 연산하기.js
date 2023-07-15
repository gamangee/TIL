function solution(arr, n) {
    var answer = [];
    if(arr.length%2===0){
        answer = arr.map((v,i)=>i%2===0? v : v+n)
    }else{
        answer = arr.map((v,i)=>i%2===1? v : v+n)
    }
    return answer;
}