const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num1 = Number(input[0]);
    let num2 = Number(input[1])
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    
    // 구조분해 할당
    // const [a, b] = line.split(' ')
    // console.log(a, '+', b, '=', Number(a) + Number(b))
});