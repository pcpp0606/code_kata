// 임의의 양의 정수 n에 대해,
// n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution(n) {
    var answer = 0;
    let x = 0;
    for(let i=1; i<n; i++) {
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

console.log(solution(121));
console.log(solution(3));