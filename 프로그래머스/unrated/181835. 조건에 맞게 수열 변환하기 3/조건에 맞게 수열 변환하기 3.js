function solution(arr, k) {
    return arr.map((v,i)=> k%2===0 ? v+k : v*k)
}