function solution(s, skip, index) {
    var answer = '';
    
    // 입력 문자열을 문자 배열로 변환
    let sarr = s.split('');
    
    // skip 문자열을 Set으로 변환하여 건너뛸 문자를 저장
    let skipSet = new Set(skip.split(''));

    // 입력 문자열의 각 문자에 대해 반복
    for (let i = 0; i < s.length; i++) {
        // 현재 문자의 아스키 코드 값을 가져옴
        let charCode = sarr[i].charCodeAt(0);
        let steps = 0;

        // 지정된 인덱스 만큼 문자를 이동
        while (steps < index) {
            charCode++;  // 아스키 코드 값을 증가시킴

            // 알파벳 'z'를 넘어가면 다시 'a'로 돌아옴
            if (charCode > 'z'.charCodeAt(0)) {
                charCode = 'a'.charCodeAt(0);
            }

            // skipSet에 포함되지 않은 문자일 때만 steps 증가
            if (!skipSet.has(String.fromCharCode(charCode))) {
                steps++;
            }
        }
        
        // 변환된 문자를 sarr 배열에 저장
        sarr[i] = String.fromCharCode(charCode);
    }

    // 변환된 문자 배열을 문자열로 합침
    answer = sarr.join('');
    return answer;  // 최종 암호화된 문자열 반환
}