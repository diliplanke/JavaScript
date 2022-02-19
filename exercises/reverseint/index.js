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
  let revstr = n.toString().split('').reverse().join('');
  console.log(parseInt(revstr) * Math.sign(n));
  return parseInt(revstr) * Math.sign(n);

}

//first attempt
// function reverseInt(n) {
//   // if (Math.sign(n) == -1) {
//   //  console.log(Math.sign(n));
//   // }
//   let str = n.toString();
//   console.log(str);
//   let revstr = reverse(n.toString());
//   if (Math.sign(n) === -1) {
//    revstr = "-" +  revstr;
//   }
//   console.log(parseInt(revstr));
//   return parseInt(revstr);
//
// }
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
reverseInt(-90);
module.exports = reverseInt;
