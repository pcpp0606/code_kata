function solution(survey, choices) {
    // 성격 유형 점수를 저장할 객체 초기화
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    // 설문과 선택지를 순회하며 점수를 계산
    survey.forEach((type, index) => {
        const choice = choices[index]; // 현재 선택지를 가져옴
        const [first, second] = type; // 설문 항목에서 두 성격 유형을 분리

        // 선택지에 따라 점수를 업데이트
        if (choice < 4) scores[first] += 4 - choice; // 첫 번째 성격 유형 점수 증가
        if (choice > 4) scores[second] += choice - 4; // 두 번째 성격 유형 점수 증가
    });

    let result = '';

    // 각 지표에서 점수가 높은 성격 유형을 선택하는 switch 문
    const types = ['RT', 'CF', 'JM', 'AN']; // 각 지표의 성격 유형 쌍 배열
    types.forEach(pair => {
        switch (true) {
            // 첫 번째 성격 유형의 점수가 더 높거나 같을 경우
            case scores[pair[0]] >= scores[pair[1]]:
                result += pair[0]; // 첫 번째 성격 유형을 결과에 추가
                break;
            // 두 번째 성격 유형의 점수가 더 높을 경우
            case scores[pair[0]] < scores[pair[1]]:
                result += pair[1]; // 두 번째 성격 유형을 결과에 추가
                break;
        }
    });

    return result; // 최종 성격 유형 결과 반환
}
