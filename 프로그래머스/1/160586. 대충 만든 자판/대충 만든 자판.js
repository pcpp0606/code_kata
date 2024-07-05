function solution(keymap, targets) {
    // 각 알파벳의 최소 타이핑 횟수를 저장할 객체
    const minTyping = {};

    // keymap을 통해 각 알파벳의 최소 타이핑 횟수를 계산
    keymap.forEach(key => {
        key.split('').forEach((char, index) => {
            // char가 minTyping에 없으면 추가, 있으면 최소 값으로 업데이트
            if (!minTyping[char]) {
                minTyping[char] = index + 1;
            } else {
                minTyping[char] = Math.min(minTyping[char], index + 1);
            }
        });
    });

    // 결과를 저장할 배열
    let answer = [];

    // 각 target 문자열에 대해 타이핑 횟수를 계산
    targets.forEach(target => {
        let totalTyping = 0; // 타이핑 횟수를 저장할 변수
        for (let char of target) {
            if (minTyping[char]) {
                totalTyping += minTyping[char];
            } else {
                // keymap에 없는 문자가 있으면 -1로 설정하고 중단
                totalTyping = -1;
                break;
            }
        }
        // 계산된 타이핑 횟수를 결과 배열에 추가
        answer.push(totalTyping);
    });

    return answer;
}
