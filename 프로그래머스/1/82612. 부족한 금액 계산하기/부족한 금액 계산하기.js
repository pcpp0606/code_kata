function solution(price, money, count) {
    var answer = 0;
    let total = 0;
    for (let i=1; i<=count; i++) {
        total += price * i;
    }
    if(money >= total) {
        answer = 0;
    } else {
        answer = total - money;   
    }
    return answer;
}