const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer=''
    for(let x of str){
        if(x.toUpperCase()===x){
            answer += x.toLowerCase();
        }else{
            answer += x.toUpperCase();
        }
    }
    console.log(answer)
});