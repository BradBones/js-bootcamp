// Two arguments - students score, total possible score
// 15/20 (75%) -> You got a C (75%)!
// A 90-100, B 80 - 89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, maxScore) {
    let percentage = (score / maxScore) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C' 
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percentage}%)`;
}

let result = gradeCalc(17, 20);
console.log(result);