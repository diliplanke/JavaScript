// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//
// function palindrome(str) {
//   str.split('').every((char, i) => {
//       return char === str[str.length - i - 1];
//       debugger;
//   });
// }


function palindrome(str) {
  const reverseStr = reverse(str);
    return reverseStr == str;
}
function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

palindrome('dilip');
module.exports = palindrome;
