function solution(num, k) {
    var answer = 0;
    let arr = String(num).split("").map(v=>Number(v))
    arr.indexOf(k) !== -1 ? answer = arr.indexOf(k)+1 : answer = -1
    return answer;
}