function solve(arr) {

    let cleaning = 0;
    for (const index of arr) {
        if (index == 'soap') {
            soap();
        } else if (index == 'water') {
            water();
        } else if (index == 'vacuum cleaner') {
            vacuumCleaner();
        } else {
            da();
        }

        function da() {
            cleaning -= cleaning * 0.1;
        }

        function vacuumCleaner() {
            cleaning += cleaning * 0.25;
        }
        
        function water() {
            cleaning += cleaning * 0.2;
        }

        function soap() {
            cleaning += 10;
        }
    }

    console.log(`The car is ${cleaning.toFixed(2)}% clean.`);

}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

/// ima greshka. 80/100 в judge