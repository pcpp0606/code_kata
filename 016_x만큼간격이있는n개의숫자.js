function solution(x, n) {
    var answer = [];
    let origin = x;
    for(let i=1; i<=n; i++) {
        answer[i-1] = x;
        x = x + origin;
    }
    return answer;
}

console.log(solution(2,5));
console.log(solution(4,3));
console.log(solution(-4,2));
