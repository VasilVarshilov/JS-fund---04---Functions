function solve(n) {
    let number = +n;
    let divisors = new Array;

    for (let i = 0; i < n; i++) {
        if (number % i == 0) {
            divisors.push(i);
        }

    }
    let isPerfect = divisors.reduce((a, b) => a + b);

    if (isPerfect == number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}
solve(2);