// 문제 01.
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return num1%num2;
}

// 문제 02.
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
function soltuion(array){
    var answer = 0;
    let result = array.sort((a,b)=>a-b);
    answer = result[Math.ceill(array.length/2)-1];
    return answer;
}

// 문제 03.
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
function solution(array) {
    let answer = -1;
    let repeatCnt=0;
    let before=-1;
    let cnt=0;
    let isdup=false;
    
    array=array.sort((a,b)=>a-b);

    for(let i=0; i<array.length; i++){
        
        if(before!=array[i]) cnt=1
        else cnt+=1

        if(cnt==repeatCnt){
            if(answer!==array[i])
                isdup=true;
        }

        if(cnt>repeatCnt){
            repeatCnt=cnt
            answer=array[i]
            isdup=false
        }
        before=array[i]
    }

    if(isdup) return -1
    return answer;    
}

// 문제 4.
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n){
    var answer = [];
    for(let i=0; i<=n; i++){
        if(i%2===1){
            answer.push(i)
        }
    }
    return answer;
}

