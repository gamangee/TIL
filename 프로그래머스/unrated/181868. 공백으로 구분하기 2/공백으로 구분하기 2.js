function solution(my_string) {
    var answer = [];
    answer = my_string.split(" ").filter(v=>v!=="")
    return answer;
}