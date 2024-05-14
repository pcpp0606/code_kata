function solution(absolutes, signs) {
    var answer = 0;
    let temp = [];
    for(let i=0; i<absolutes.length; i++) {
        if(signs[i] === true) {
            temp.push(absolutes[i] * 1);
        }
        else{
            temp.push(absolutes[i] * -1);
        }
        answer += temp[i];
    }
    return answer;
}