function calculateGPA(arr) {
    sum = 0;
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] === 'A') {
            sum += 100;
        } else if (arr[i] === 'B') {
            sum += 80;
        } else {
            sum += 70;
        }
    }
    gpa = sum / arr.length;

    return gpa;
}

console.log('Your GPA is ', calculateGPA(['A', 'B', 'C']).toFixed(2))