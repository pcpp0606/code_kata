function solution(numbers) {
    var answer = 0;
    let zeronine = [0,1,2,3,4,5,6,7,8,9];
    let isnumbers = [];
    let temp = [];
    numbers = numbers.sort((a, b) => a - b); // 입력 배열을 오름차순으로 정렬합니다.
    for(let i=0; i<zeronine.length;i++){
        isnumbers.push(numbers.includes(zeronine[i]));
        if(isnumbers[i] === false) {
            temp[i] = zeronine[i];
        } else {
            temp[i] = 0;
        }
        answer += temp[i];
    }
    return answer;
}