function solution(n)
{
    var answer = 0;
    let temp = [];

    temp = String(n).split("");

    for (let i=0; i<temp.length; i++) {
        answer += parseInt(temp[i]);
    }

    return answer;
}

console.log(solution(123));
console.log(solution(987));