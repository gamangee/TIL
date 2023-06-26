function solution(num_list) {
    var answer = [];
    for(let i=0;i<num_list.length;i++){
        if(num_list[num_list.length-1] > num_list[num_list.length-2]){
            let gap = num_list[num_list.length-1] - num_list[num_list.length-2]
            answer = [...num_list, gap]
        }else{
            answer = [...num_list, num_list[num_list.length-1]*2]
        }
    }
    return answer;
}