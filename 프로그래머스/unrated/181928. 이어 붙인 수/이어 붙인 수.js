function solution(num_list) {
    var answer = 0;
    let odd ="";
    let even ="";
    for(let x of num_list){
        if(x%2===0){
            even += String(x);
        }else{
            odd += String(x);
        }
    }
    answer = Number(even) + Number(odd)
    return answer;
}