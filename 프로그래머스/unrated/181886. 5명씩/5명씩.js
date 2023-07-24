function solution(names) {
    var answer = [];
    answer = names.filter((v,i)=> i%5 === 0)
    return answer;
}