function solution(k, score) {
    // 명예의 전당 배열
    var honor = []
    // 결괏값
    var answer = []
    // 모든 점수 순회
    for(let i = 0 ; i < score.length ; i ++) {
        // 명예의 전당 기본 셋팅
        if(i < k) {
            honor.push(score[i])
        }
        // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
        // 스프레드 연산자(...)는 배열을 개별 요소로 분리하는 역할
        if(score[i]>Math.min(...honor)) {
            // 가장 작은 수를 이번 점수와 교체 후 내림차 순 정렬
            honor.pop()
            honor.push(score[i])
            honor.sort((a,b) => b-a)
        }
        // 결괏값에 명예의 전당 중 최하위 점수 입력
        answer.push(honor.at(-1))
    }
    return answer
}