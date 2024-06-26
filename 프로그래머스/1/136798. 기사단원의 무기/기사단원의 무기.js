function solution(number, limit, power) {
//answer : 정답 변수, arr : 약수의 개수가 들어갈 배열 , cnt : number까지의 각 숫자의 약수의 개수
    let answer = 0
    let arr=Array(number)
    let i=1
    while(i<=number){
    let cnt=0
     for(let j=1;j*j<=i;j++){
      if(i%j==0){
       cnt++
        if (j*j < i) 
            cnt++
      }
     }
    arr[i-1]=cnt
    i++
    }
    arr.forEach(v=>{
    if(v>limit)answer+=power
    })
    answer+=arr.filter(v=>v<=limit).reduce((a,b)=>a+b,0)
    return answer
}