function solve(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let pointOne = [x1, y1];
    let pointTwo = [x2, y2];
    let first = 'invalid';
    let second = 'invalid';
    let third = 'invalid';

    for (const iterator of pointOne) {
        if (iterator === 0) {
            first = 'valid';
        }
    }

    for (const iterator of pointTwo) {
        if (iterator === 0) {
            second = 'valid';
        }
    }


    for (var i = 0; i < pointOne.length; i++) {
        for (var j = 0; j < pointTwo.length; j++) {
            if (pointOne[i] == pointTwo[j]) {
                third = 'valid';
            }
        }
    }

    console.log(`{${pointOne.join(', ')}} to {0, 0} is ${first}`);
    console.log(`{${pointTwo.join(', ')}} to {0, 0} is ${second}`);
    console.log(`{${pointOne.join(', ')}} to {${pointTwo.join(', ')}} is ${third}`);
}
solve([3, 0, 0, 4]);

//////////ima greshka 80/100 v judge