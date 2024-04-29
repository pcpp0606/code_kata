function solution(n) {
    var answer = 0;
    for (let i=2; i<n; i++) {
        if(n%i == 1){
            answer = i;
        }
    }
    return answer;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(11));
console.log(solution(12));
console.log(solution(15));