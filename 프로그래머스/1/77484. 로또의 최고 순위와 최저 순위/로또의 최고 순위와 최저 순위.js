function solution(lottos, win_nums) {
    // 로또 등수 배열: 맞힌 개수에 따라 등수가 결정됨
    // 6개 맞춤: 1등
    // 5개 맞춤: 2등
    // 4개 맞춤: 3등
    // 3개 맞춤: 4등
    // 2개 맞춤: 5등
    // 1개 또는 0개 맞춤: 6등
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let minCorrect = 0; // 최소 맞힌 개수
    let zeroCount = 0;  // 0의 개수

    // lottos 배열을 순회하며 맞힌 개수와 0의 개수를 셈
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeroCount++;
            // win_nums에 lottos[i]가 포함되어있는지 확인
        } else if (win_nums.includes(lottos[i])) {
            minCorrect++;
        }
    }
    
    // 최대 맞힌 개수는 최소 맞힌 개수에 0의 개수를 더한 값
    let maxCorrect = minCorrect + zeroCount;
    
    // 결과 배열 반환 (최고 등수, 최저 등수)
    return [rank[maxCorrect], rank[minCorrect]];
}