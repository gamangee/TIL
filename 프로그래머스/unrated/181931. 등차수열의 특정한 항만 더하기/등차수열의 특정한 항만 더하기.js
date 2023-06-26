function solution(a, d, included) {
    var answer = 0;
    let count = 0;
   for(let i=0; i<included.length; i++){
       count = a + (d*i)
       if(included[i]){
           answer += count
       }
   }
    return answer;
}