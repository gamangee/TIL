function solution(num_list) {
    var answer = 0;
    let odd = num_list.filter((v,i)=> !(i%2===0)).reduce((a,b)=>a+b)
    let even = num_list.filter((v,i)=> i%2===0).reduce((a,b)=>a+b)
    
    if(odd>even){
        answer = odd;
    }else if(odd===even){
        answer = odd;
    }else {
        answer= even;
    }
    
    return answer;
}