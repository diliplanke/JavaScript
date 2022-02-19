// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // if (Math.sign(n) == -1) {
  //  console.log(Math.sign(n));
  // }
  let str = n.toString();
  console.log(str);
  let revstr = reverse(n.toString());
  if (Math.sign(n) == -1) {
   revstr = "-" +  revstr;
  }
  parseInt(revstr);
  console.log(parseInt(revstr));
}
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
reverseInt(-58);
module.exports = reverseInt;
