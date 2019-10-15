function solve(arr) {

    if (arr <= 2.99) {
        console.log('Fail');
    } else if (arr >= 3.00 && 3.49 >= arr) {
        console.log('Poor');
    } else if (arr >= 3.50 && 4.49 >= arr) {
        console.log('Good');
    } else if (arr >= 4.50 && 5.49 >= arr) {
        console.log('Very good');
    } else if (arr >= 5.50 && 6 >= arr) {
        console.log('Excellent');
    }
}
solve(3.44);