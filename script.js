function firstWord(s) {
  // your code here
// first trim it
	let firstWord;
	// first skip spaces
	let index=0;
	while(index<s.length&&s.charAt(index)===' '){
		index++;
	}

	while(index<s.length&&s.charAt(index)!==' '){
		firstWord.append(s.charAt(index));
		index++;
	}

	return firstWord? firstWord:" ";
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
