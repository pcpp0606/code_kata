function solution(players, callings) {
    // 각 선수의 현재 위치를 저장하는 객체 생성
    const positions = {};

    // 초기 선수 위치 설정
    players.forEach((player, index) => {
        positions[player] = index;
    });

    // 호출된 순서대로 처리
    callings.forEach(calling => {
        // 호출된 선수의 현재 위치
        const currentPosition = positions[calling];
        if (currentPosition > 0) {
            // 앞선 선수와 위치 교환
            const playerInFront = players[currentPosition - 1];
            players[currentPosition - 1] = calling;
            players[currentPosition] = playerInFront;

            // 위치 업데이트
            positions[calling] = currentPosition - 1;
            positions[playerInFront] = currentPosition;
        }
    });

    // 최종 선수 배열 반환
    return players;
}