// Palindrome Checker
function palindrome(str) {
  let regax = /[a-z0-9]/gi;

  // remove all non-alphanumeric characters, join them, turn them all to lower case
  let alphanumeric = str.match(regax).join("").toLowerCase();

  // reverse the string given
  const reversed = alphanumeric.split("").reverse().join("")

  // check if the string is palindrome
  return reversed === alphanumeric;
}

palindrome("eye");