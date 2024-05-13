function solution(num) {
    var answer = 0;
    for(let i=1; i<=500; i++) {
        if(num%2 == 0) {
            // num = num / 2;
            num /= 2;
            if(num == 1) {
                answer = i;
                break;
            }
        } else if(num == 1){
            answer = 0;
            break;
        } else {
            num = num * 3 + 1;
        }
        
        if(i>=500) {
            answer = -1;
            break;
        }
        
    }
    return answer;
}