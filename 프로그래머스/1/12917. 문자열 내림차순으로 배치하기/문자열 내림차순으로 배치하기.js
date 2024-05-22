function solution(s) {
    var answer = '';
    // answer = s.split(''); // s 글자별로 쪼개어 배열화 시키기
    // answer = answer.sort(); // 배열화된 answer를 오름차순으로 정렬시키기
    // answer = answer.reverse(); // answer를 역으로 즉, 내림차순으로 정렬시키기
    // answer = answer.join(''); // answer 배열을 문자열로 바꾸기
    answer = s.split('').sort().reverse().join('');
    return answer;
}