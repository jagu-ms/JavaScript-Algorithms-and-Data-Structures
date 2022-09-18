function rot13(str) {
  // Regax matches alphabetical characters
  let regax = /[a-zA-Z]/;

  return str.split("").map(char => {
    const charCode = char.charCodeAt();
    const transformed = charCode + 13;

    // check if the char is an alphabet
    if(regax.test(char)) {
      if(transformed <= 90) {
        return String.fromCharCode(transformed)
      } else {
        return String.fromCharCode(transformed - 26)
      }
    } else {
      return char;
    }
  }).join("");
}

rot13("SERR PBQR PNZC");