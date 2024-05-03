function solution(n) {
    var answer = 0;
    let x = 0;
    for(let i=1; i<=n; i++) {
        if (i**2 == n) {
            x = i+1;
            answer = x**2;
            break;
        } else {
            x = -1;
            answer = x;
        }
    }
    return answer;
}

console.log(solution(1));
console.log(solution(4));
console.log(solution(9));
console.log(solution(16));
console.log(solution(25));
console.log(solution(36));
console.log(solution(49));
console.log(solution(64));
console.log(solution(81));
console.log(solution(100));
console.log(solution(121));
console.log(solution(3));