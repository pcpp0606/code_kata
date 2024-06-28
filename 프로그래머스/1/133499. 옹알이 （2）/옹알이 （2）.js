function solution(babbling) {
    var answer = 0;
    let yesican = ["aya", "ye", "woo", "ma"];
    
    // babbling만큼 반복
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        // yesican만큼 반복
        for(let j = 0; j < yesican.length; j++){
            // babble에 동일한 단어가 2번 연속되면 중단
            if(babble.includes(yesican[j].repeat(2))){
                break;
            }
            
            // yesican의 단어를 공백으로 교체
            babble = babble.split(yesican[j]).join(" ");
        }
        
        // 모든 yesican 단어를 제거한 후 남은 문자가 없으면
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    
    return answer;
}