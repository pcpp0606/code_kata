function solution(a, b, n) {
    // 받은 콜라 수
    var answer = 0
    // 교환 가능한 수량이 아닐때까지 반복
    while (n >= a) {
        const cola = Math.floor(n / a) * b;
        answer += cola;
        n = n % a + cola;
    }
    return answer;
}