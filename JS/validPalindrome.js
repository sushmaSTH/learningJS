/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    lowerCaseS= s.toLowerCase();
    let characters= lowerCaseS.replace(/[^A-Za-z0-9]/g, '');
    let reverseCharacters = characters.split('').reverse().join('');
    return characters ===reverseCharacters;
    
}