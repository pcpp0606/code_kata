function solution(left, right) {
    let arr = []; // 약수 배열
    let arrLength = []; // 약수 개수 배열
    let leftRight = []; // left ~ rigth까지의 숫자 배열
    let answer = 0;
    for (let i=left; i<=right; i++){
        leftRight.push(i)
        for (let j=1; j<=i; j++) {
            i % j == 0 && arr.push(i)
        }
        arrLength.push(arr.filter(item => i===item).length)
    }
    
    for (let z = 0; z < arrLength.length; z++){
        arrLength[z] % 2 === 0 ? answer += leftRight[z] : answer -= leftRight[z]
        console.log(answer)
    }
    
    return answer;
    
}