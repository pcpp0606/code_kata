function solution(number, limit, power) {
    var answer = 0;
    // n 즉, 기사단원 수 만큼 반복
    for (let n = 1; n <= number; n++){
        let count = 0;
        // 약수가 된다.
        for (let j = 1; j * j <= n; j++)
        {
            // j의 제곱이 n이면 count를 1 증가
            if (j * j === n)
                count++;
            // j가 n의 약수면 count에 +2
            // 기본적으로 
            else if (n % j === 0)
                count += 2;
        }
        // limit과 비교하여 크다면 power값을 넣어준다.
        if (count > limit)
            count = power;
        // 지금까지의 count 값을 answer에 넣어준다.
        answer += count;
    }
    return answer;
}