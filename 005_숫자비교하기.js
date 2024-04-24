function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) {
        answer = 1;
    } else if (num1 != num2) {
        answer = -1;
    }
    return answer;
}

let a = 2567;
let b = 3684;
// let b = 2567;

console.log(solution(a, b));