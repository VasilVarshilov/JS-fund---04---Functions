function solve(progress) {
    let percent = progress / 10;
    let result = new Array;
    for (let i = 0; i < percent; i++) {
        result.push('%');

    }

    while (result.length < 10) {
        result.push('.');
    }

    if (progress !== 100) {
        console.log(progress + '%' + ` [${result.join('')}]` + '\n' + 'Still loading...');

    } else {
console.log(`100% Complete!\n[..........]`)
    }

}
solve(30);
solve(40);
solve(100);