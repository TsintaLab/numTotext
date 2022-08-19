function numTotext(input) {
  var a, b, c, d, e,f,f1,f2, output, outputA, outputB, outputC, outputD, outputE, outputF, outputF1;

  var ones = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

  if (input === 0) { // Zero

    output = "cero";

  } else if (input == 1) { // One

    output = "uno";

  } else { // More than one

    // Diez
    a = input % 100;
    outputA = oneToHundred_(a);

    // Cien
    b = Math.floor((input % 1000) / 100);
    if (b > 0 && b < 10) {
      outputB = ones[b];
    }

    // Miles
    c = (Math.floor(input / 1000)) % 100;
    outputC = oneToHundred_(c);

    // Cien Mil
    d = (Math.floor(input / 100000)) % 100;
    outputD = oneToHundred_(d);

    // Millones
    e = (Math.floor(input / 10000000)) % 100;
    outputE = oneToHundred_(e);

    // Decimales
    f = (input % 1000);
    if (f > 0 && f < 10) {
    f1 = Math.floor(f);
    f2 = Math.round((f-f1)*10);
      outputF = ones[f1];
      outputF1 = ones[f2];
    }
    // Make string
    output = "";

    if (e > 0) {
      output = output + " " + outputE + " millones";
    }

    if (d > 0) {
      output = output + " " + outputD + " cien mil";
    }

    if (c > 0) {
      output = output + " " + outputC + " mil";
    }

    if (b > 0) {
      output = output + " " + outputB + " cien";
    }

    if (input > 100 && a > 0) {
      output = output + " y";
    }

    if (a > 0) {
      output = output + " " + outputA;
    }

    if (input % 1 != 0){
      output = outputF + " punto " + outputF1 
    }

    output = output + " ";
  }

  return output;

}

function oneToHundred_(num) {

  var outNum;

  var ones = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

  var teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve'];

  var tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

  if (num > 0 && num < 10) { // 1 to 9

    outNum = ones[num]; // ones

  } else if (num > 9 && num < 20) { // 10 to 19

    outNum = teens[(num % 10)]; // teens

  } else if (num > 19 && num < 100) { // 20 to 100

    outNum = tens[Math.floor(num / 10)]; // tens

    if (num % 10 > 0) {

      outNum = outNum + " " + ones[num % 10]; // tens + ones

    }

  }

  return outNum;

}
