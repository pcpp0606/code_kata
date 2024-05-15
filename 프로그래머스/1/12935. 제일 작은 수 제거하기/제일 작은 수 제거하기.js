function solution(arr) {
    var answer = [];
    if (arr.length <= 1) {
        return [-1];
    }
    
    let min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    
    answer = arr.filter(element => element !== min);
    
    return answer;
}