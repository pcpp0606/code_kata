function solution(ingredient) {
    let stack = []; // 재료를 담을 스택
    let count = 0;  // 햄버거 개수를 세는 변수

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]); // 현재 재료를 스택에 추가
        if (stack.length >= 4) { // 스택의 길이가 4 이상인 경우
            // 마지막 4개의 재료가 '1231'인지 확인
            if (stack.slice(-4).join('') === '1231') {
                stack.splice(-4, 4); // '1231' 패턴을 스택에서 제거
                count++; // 햄버거 개수 증가
            }
        }
    }
    return count; // 만들어진 햄버거 개수 반환
}