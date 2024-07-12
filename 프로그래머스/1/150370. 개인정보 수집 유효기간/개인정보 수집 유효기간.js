function solution(today, terms, privacies) {
    // 날짜를 일 단위로 변환하는 함수
    function dateToDays(date) {
        const [year, month, day] = date.split('.').map(Number);
        return year * 12 * 28 + month * 28 + day;
    }

    // 오늘 날짜를 일 단위로 변환
    const todayDays = dateToDays(today);

    // 약관 정보를 객체에 저장
    const termMap = {};
    for (const term of terms) {
        const [type, duration] = term.split(' ');
        termMap[type] = Number(duration) * 28; // 달을 일 단위로 변환
    }

    const expiredPrivacies = [];

    // 각 개인정보의 유효기간을 계산
    for (let i = 0; i < privacies.length; i++) {
        const [date, type] = privacies[i].split(' ');
        const collectedDays = dateToDays(date);
        const expirationDays = collectedDays + termMap[type];

        // 오늘 날짜가 유효기간을 넘었는지 확인
        if (todayDays >= expirationDays) {
            expiredPrivacies.push(i + 1);
        }
    }

    return expiredPrivacies;
}
