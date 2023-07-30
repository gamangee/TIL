function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).map(v=>Number(v)).reduce((s,v)=>s+v,0);
}