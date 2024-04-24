function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum = sum + numbers[i];
    }
    answer = sum / numbers.length;
    return answer;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numbers));