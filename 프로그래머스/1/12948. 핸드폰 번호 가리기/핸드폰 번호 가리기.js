function solution(phone_number) {
    var answer = '';
    let p = phone_number.slice(-4,phone_number.length)
    // console.log(p);
    let maskedValue = '*'.repeat(phone_number.length-4);
    // console.log(maskedValue);
    answer= maskedValue + p;
    return answer;
}