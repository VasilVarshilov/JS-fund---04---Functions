function solve(input, div) {

    function factorial(n) {
        return n == 1 ? 1 : n * factorial(n - 1);
    }

  let result = factorial(input)/factorial(div);
  console.log(result.toFixed(2));
}