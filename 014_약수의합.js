function solution(n) {
    var answer = 0;
    
    // for (let i=0; i<=n; i++) {
    //     if(n%i == 0) {
    //         temp[i] = i;
    //     }
    //     temp = temp.filter(Boolean);
    //     answer += temp[i];
    // }
    
    for(let i=0; i<=n; i++) {
        if(n%i == 0) {
            answer += i;
        }
    }

    return answer;
}

console.log(solution(12));
console.log(solution(5));