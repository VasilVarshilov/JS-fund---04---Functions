function passwordValidator(password){

	let lengthValidation = lengthValidator(password);
	let conditionValidation = containsValidator(password);
	let digitContainsValidation = digitContainsValidator(password);
	
	if(lengthValidator(password) === true && containsValidator(password) === true && digitContainsValidator(password) === true){
		console.log("Password is valid");
	
	}else {
		if(lengthValidation !== true){
			console.log("Password must be between 6 and 10 characters");
		}
		if(conditionValidation !== true){
			console.log("Password must consist only of letters and digits");
		}
		if(digitContainsValidation !== true){
			console.log("Password must have at least 2 digits");
		}
		
	}
	
	
	
	
	function lengthValidator(password) {
	if (password.length >= 6 && password.length <= 10){
		return true;
	} else {
		return "Password must be between 6 and 10 characters"
	}
	
	}
	
	function containsValidator(password){
	
		let characters = password.split("");
		
		let isValid = true;
		
		for(let letter of characters) {
		
			let asciiValue = letter.charCodeAt();
			
			if (!isDigit(asciiValue) && !isCapitalLetter(asciiValue) && !isLowerLetter(asciiValue)) {
				isValid = false;
				break;
			}
			
		}
		
		if(isValid) {
			return true;
		} else{
			return "Password must consist only of letters and digits"
		}
		
		function isDigit(char){
		
			return char >= 48 && char <= 57;
		
		}
		
		function isCapitalLetter(char) {
		
			return char >= 65 && char <= 90;
		}
		
		function isLowerLetter(char) {
		
			return char >= 97 && char <= 122;
		}
		
	}
	
	function digitContainsValidator(password){
	
		let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		let digitCounter = 0;
		
		password.split("").forEach((letter) => {
			
			let value = Number(letter);
			
			if(digits.includes(value)){
			digitCounter++;
			}
		})
		
		if (digitCounter >= 2){
			return true;
		} else {
			return "Password must have at least 2 digits"
		}
		
	
	}

}
passwordValidator("MyPass123");