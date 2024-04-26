function solution(n) {
    var answer = 0;
    let sum = 0;

    for (let i=0; i<=n; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    answer = sum;
    return answer;
}

console.log(solution(10));
console.log(solution(30));
console.log(solution(70));
console.log(solution(75));
console.log(solution(100));