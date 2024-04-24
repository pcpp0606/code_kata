function solution(age) {
    var answer = 0;
    answer = 2022 - age + 1;
    return answer;
}

let age = 50;

console.log("2022년 기준 " + age + "살이므로 " + solution(age) + "년생입니다.");