function solution(wallpaper) {
    // 가장 작은 x, y 좌표값을 찾기 위해 초기값을 -1로 설정
    let lux = -1, luy = -1, rdx = -1, rdy = -1;

    // 각 행과 열을 순회하며 파일이 있는 위치를 찾음
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                // 첫 번째로 발견되는 파일 위치를 초기값으로 설정
                if (lux === -1 || i < lux) lux = i;
                if (luy === -1 || j < luy) luy = j;
                if (rdx === -1 || i > rdx) rdx = i;
                if (rdy === -1 || j > rdy) rdy = j;
            }
        }
    }

    // 결과 좌표 반환 (우하단 좌표는 +1)
    return [lux, luy, rdx + 1, rdy + 1];
}
