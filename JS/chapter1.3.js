function isPalindrome(str) {
    const charCounts = {};
    const inputString = str.replace(/ /g, '');
    console.log(inputString)
  
    for(let i = 0; i < inputString.length; i++) {
      const char = inputString[i].toLowerCase();
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    const oddsCount = Object
      .values(charCounts)
      .reduce((a, b) => b % 2 === 1 ? a + 1 : a, 0)
  
    return oddsCount <= 2
  }
  
  console.log(isPalindrome('asd a sd'))
  console.log(isPalindrome('level'))
  console.log(isPalindrome('asdfgr') )
  console.log(isPalindrome('Tact Coa'))