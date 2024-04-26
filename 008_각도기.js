function solution(angle) {
    var answer = 0;
    if (angle < 90) answer = 1
    else if (angle == 90) answer = 2
    else if (angle > 90 && angle < 180) answer = 3
    else if (angle == 180) answer = 4
    return answer;
}

console.log(solution(0));
console.log(solution(20));
console.log(solution(60));
console.log(solution(90));
console.log(solution(120));
console.log(solution(150));
console.log(solution(180));