function solve(one, two, three) {
    let result = '';

    if (one >= 0 && two >= 0 && three >= 0) {
        result = 'Positive';
    } else if (one <= 0 && two <= 0 && three <= 0) {
        result = 'Negative';
    } else if (one <= 0 && two <= 0 ||
        three <= 0 && one <= 0 ||
        three <= 0 && two <= 0) {
        result = 'Positive';
    } else if (one <= 0 || two <= 0 || three <= 0) {
        result = 'Negative';
    }
    console.log(result);
}
solve(5, -12, -15);