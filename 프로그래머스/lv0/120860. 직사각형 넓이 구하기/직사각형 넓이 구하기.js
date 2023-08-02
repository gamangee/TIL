function solution(dots) {
    var answer = 0;
    let arr = dots.sort();
    let width = Math.abs(arr[1][0]-arr[3][0])
    let height = Math.abs(arr[1][1]-arr[0][1])
    answer = width * height;
    return answer;
}