function solution(num1, num2) {
    var answer = 0;
    let temp;
    temp = num1 / num2;
    answer = Math.floor(temp);
    return answer;
}

console.log(solution(10,5));
console.log(solution(99,3));
console.log(solution(19,6));