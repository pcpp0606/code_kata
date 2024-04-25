function solution(num) {
    var answer = '';
    let namuji = num % 2;
    if (namuji == 0) {
        answer = "Odd";
    } else {
        answer = "Even"
    }
    return answer;
}

// let number = 8;
// let number = 9;
let number = 0;
console.log("입력하신 숫자는 " + number);
console.log(solution(number));