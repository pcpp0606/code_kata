function solution(arr) {
    var answer = 0;
    let sum = 0;
    let average = 0;
    
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    
    average = sum / arr.length;
    answer = average;
    
    return answer;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(solution(arr));