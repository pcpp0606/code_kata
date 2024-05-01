// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
    var answer = [];
    let temp = Array.from(String(n), Number);
    for (let i=0; i<temp.length; i++) {
        answer[i] = temp[temp.length-i-1];
    }

    return answer;
}
// let temp = Array.from(String(a), Number);
// const arr = String(a).split('').map(Number);
console.log(solution(12345));
console.log(solution(678));
console.log(solution(1589561));