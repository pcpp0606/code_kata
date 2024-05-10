function solution(n) {
    var answer = 0;
    let arr = Array.from(String(n), Number);
    for (let i = 0; i < arr.length; i++) {
        let max = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[max] < arr[j]) {
                max = j;
            }
        }

        if (max != i) {
            let temp = arr[max];
            arr[max] = arr[i];
            arr[i] = temp;
        }
    }

    answer = Number(arr.join(''));
    return answer;
}

 console.log(solution(118372));