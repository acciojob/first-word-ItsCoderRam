function firstWord(s) {
  // your code here
	function firstWord(str) {
    // split the string into an array of words
    let words = str.split(' ');

    // return the first word
    return words[0];
}

// Do not change the code below

 const s = prompt("Enter String:");
 alert(firstWord(s));
