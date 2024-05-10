function solution(x) {
    var answer = true;
    let temp = Array.from(String(x), Number);
    let t = 0;
    for (let i=0; i<temp.length; i++) {
        t = t + temp[i];
    }
    
    if (x%t == 0) {
        answer = true;
    } else {
        answer = false
    }
    
    return answer;
}
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));