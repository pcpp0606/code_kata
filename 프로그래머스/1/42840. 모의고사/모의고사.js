function solution(answers) {
    var answer = [];
    // 수포자들이 찍는 방식의 패턴(s1, s2, s3)과 채점표(score)를 각각 배열로 변환
    const s1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    // 배열 answers가 주어졌을 때, 문제를 맞힌 횟수를 각각 채점해 score에 입력
    for (let i = 0; i < answers.length; i++) {
        // i % s1.length를 함으로써 answers의 길이가 s1보다 길거나 짧아도
        // 상관없이 s1의 패턴을 반복함으로써 문제가 없도록 해준다.
        if (s1[i % s1.length] === answers[i]) {
            score[0]++;
        }
        if (s2[i % s2.length] === answers[i]) {
            score[1]++;
        }
        if (s3[i % s3.length] === answers[i]) {
            score[2]++;
        }
    }
    
    // score에서 가장 큰 수를 저장
    let max = Math.max(...score);
    for(let j=0; j<score.length; j++) {
        if(score[j] === max) {
            // j가 0부터 시작하기에 1을 더해준다.
            answer.push(j+1);
        }
    }
    
    return answer;
}