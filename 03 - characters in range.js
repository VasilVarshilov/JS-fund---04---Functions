function charactersInRange(startSymbol, endSymbol){
	
	let startAsciiValue = startSymbol.charCodeAt(0);
	let endAsciiValue = endSymbol.charCodeAt(0);
	
	let startPoint = Math.min(startAsciiValue, endAsciiValue);
	
	console.log(startPoint);
	
}
charactersInRange("Z", "A");

----------------------------------------------------

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function charactersInRange(startSymbol, endSymbol){
	
	let startAsciiValue = getAsciiValue(startSymbol);
	let endAsciiValue = getAsciiValue(endSymbol);
	
	let startPoint = Math.min(startAsciiValue, endAsciiValue);
	let endPoint = Math.max(startAsciiValue, endAsciiValue);
	
	printAsciiSymbols(startPoint, endPoint);
	
	function getAsciiValue(char){
	
		return char.charCodeAt(0);
	
	}
	
	function printAsciiSymbols(after, before){
	
		let symbols = [];
		
		for(let i = after + 1; i <= (before - 1); i++) {
			symbols.push(String.fromCharCode(i))
		}
		
		console.log(symbols.join(" "));
	
	}
	
}
charactersInRange("Z", "A");