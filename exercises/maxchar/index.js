// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  const maxchars ={};
  let highval = 0;

  for ( let char of str ) {
    chars[char] = chars[char] +1 || 1;
    if ( parseInt(chars[char]) > highval ){
       highval = parseInt(chars[char]);
    }
  }
  console.log(highval);
  for (const [key, value] of Object.entries(chars)){
          console.log(key, value)
          if(value === highval){
            console.log(key)
            return key
          }
  }
}
maxChar('Halley Berry')
module.exports = maxChar;
