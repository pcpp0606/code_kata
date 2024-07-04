function solution(s) {
    let answer = 0;
    let count1 = 0;
    let count2 = 0;
    let firstChar = s[0];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === firstChar) {
            count1++;
        } else {
            count2++;
        }
        
        if (count1 === count2) {
            answer++;
            if (i + 1 < s.length) {
                firstChar = s[i + 1];  // 다음 부분 문자열의 첫 번째 문자 설정
            }
            count1 = 0;
            count2 = 0;
        }
    }
    
    if (count1 !== 0 || count2 !== 0) {
        answer++;
    }
    
    return answer;
}