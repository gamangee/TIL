function solution(my_string, index_list) {
    var answer = "";
    let myArr = [...my_string];
    for(let x of index_list){
        answer += myArr[x]
    }
    return answer;
}