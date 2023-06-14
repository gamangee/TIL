function solution(str1, str2) {
    return [...str1].map((v,i)=>v+str2[i]).join("")
}