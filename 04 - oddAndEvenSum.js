function oddAndEvenSum(number){

	const allEvenDigits = getEvenDigits(number);
	const allOddDigits = getOddDigits(number);
	
	const evenSum = getSum(allEvenDigits);
	const oddSum = getSum(allOddDigits);

	function getEvenDigits(number) {
	let evenDigits = [];
		number.toString().split("").forEach((digit) => {
		
			let currentNumber = Number(digit);
			
			if(currentNumber % 2 === 0){
				evenDigits.push(currentNumber);
			
			}
		
		});
		
		return evenDigits;
		
	}
	
	function getOddDigits(number) {
	let oddDigits = [];
		number.toString().split("").forEach((digit) => {
		
			let currentNumber = Number(digit);
			
			if(currentNumber % 2 === 1){
				oddDigits.push(currentNumber);
			
			}
		
		});
		
		return oddDigits;
	
	}
	
	function getSum(arr){
		let sum = 0;
	
		for(let i = 0; i < arr.length; i++){
		sum += arr[i];
		
		}
		
		return sum;
	}
	
	console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
	
}
oddAndEvenSum()