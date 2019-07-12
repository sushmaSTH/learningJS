/* Stack */
function palindrome(word){
var letters=[]; //this is our stack

var rword="";
//put letter of words into stack
for (var i=0; i <word.length; i++){
  letters.push(word[i]);
}
//pop off the stack in reverse order
for (var i=0; i <word.length; i++){
  rword +=letters.pop();
}
if (word === rword){
  console.log(word + " is a palindrome");
}else{
  console.log(word + " is not a palindrome");
}
}
palindrome("racecar");