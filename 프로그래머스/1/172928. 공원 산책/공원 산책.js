function solution(park, routes) {
    // 현재 위치를 찾기 위해 공원을 순회합니다.
    let currentPosition = [0, 0];
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                currentPosition = [i, j];
                break;
            }
        }
    }

    // 각 방향에 대한 이동 벡터를 정의합니다.
    const directionMap = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };

    // 주어진 명령을 처리합니다.
    for (let route of routes) {
        let [direction, steps] = route.split(' ');
        steps = parseInt(steps);
        let [dx, dy] = directionMap[direction];
        
        let newPosition = [...currentPosition];
        let validMove = true;

        // 각 스텝마다 새로운 위치를 계산합니다.
        for (let step = 0; step < steps; step++) {
            newPosition[0] += dx;
            newPosition[1] += dy;

            // 공원을 벗어나거나 장애물을 만나는지 확인합니다.
            if (newPosition[0] < 0 || newPosition[0] >= park.length || 
                newPosition[1] < 0 || newPosition[1] >= park[0].length || 
                park[newPosition[0]][newPosition[1]] === 'X') {
                validMove = false;
                break;
            }
        }

        // 유효한 이동이면 현재 위치를 업데이트합니다.
        if (validMove) {
            currentPosition = newPosition;
        }
    }

    return currentPosition;
}
