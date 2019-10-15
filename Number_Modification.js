function solve(arr) {
    let toString = arr.toString();

    let bool = true;

    while (bool !== false) {
        let avg = 0;
        let number = 0;
        for (let i = 0; i < toString.length; i++) {
            number += +toString[i];
        }
        avg = number / toString.length;

        if (avg >= 5) {
            bool = false;
        } else {
            toString += '9';
        }
    }

    console.log(toString);
}
solve(101);

/////// greshka ima. 0/100 v judge