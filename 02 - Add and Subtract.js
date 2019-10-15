function solve(a, b, c) {
    let summed = sum(a, b);
    let result = subtract(summed, c);
    console.log(result);

    function sum(num, num1) {
        return num + num1;
    }

    function subtract(num2, num3) {
        return num2 - num3;
    }

}
solve(23, 6, 10);