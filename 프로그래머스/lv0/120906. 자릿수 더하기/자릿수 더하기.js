function solution(n) {
    var answer = 0;
    answer = n.toString().split("").map((item)=>Number(item)).reduce((sum, cur, arr)=> {return sum+=cur},0)
    return answer;
}