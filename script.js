function firstWord(s) {
  // your code here
	if (s.length === 0) {
        return '';
    }

    var firstSpaceIndex = s.indexOf(' '); 
    if (firstSpaceIndex === -1) {
        return s;
    }

    return s.slice(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
