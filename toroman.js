function convertToRoman(num) {
  let roman = "";
  
  while (num >= 1) {
    console.log(num)
    if(num >= 1000){
    num -= 1000;
      roman += "M" ;
      continue;
    }
    if(num >= 900){
    num -= 900;
      roman += "CM" ;
      continue;
    }
    if(num >= 500){
    num -= 500;
      roman += "D" ;
      continue;
    }
    if(num >= 400){
    num -= 400;
      roman += "CD" ;
      continue;
    }
    if(num >= 100){
    num -= 100;
      roman += "C" ;
      continue;
    }
    if(num >= 90){
    num -= 90;
      roman += "XC" ;
      continue;
    }
    if(num >= 50){
    num -= 50;
      roman += "L" ;
      continue;
    }
    if(num >= 40){
    num -= 40;
      roman += "XL" ;
      continue;
    }
    if(num >= 10){
        num -= 10;
      roman += "X" ;
      continue
    }
    if(num >= 9){
    num -= 9;
      roman += "IX" ;
      continue
    }
    if(num >= 5){
    num -= 5;
      roman += "V" ;
      continue
    }
    if(num >= 4){
    num -= 4;
      roman += "IV" ;
      continue
    }
    if(num >= 1){
    num -= 1;
      roman += "I" ;
      continue
    }  
  }

  return roman;
}

convertToRoman(36);