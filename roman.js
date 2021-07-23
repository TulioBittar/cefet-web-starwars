const ROMAN = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
}

export function toRoman(decimalNumber){
    return ROMAN[decimalNumber].padEnd(3, ' ');
}
