function solve(n) {
    let top = length(n);

    function length(number) {
        let item = number;
        let result = new Array;
        for (let i = 0; i < number; i++) {
            result.push(item);
        }
        return result;
    }

    function output(top) {
        for (let i = 0; i < top[0]; i++) {
            console.log(top.join(' '));

        }
    }

    output(top);
}
solve(9);