export function numberToWord(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  if (number < 10) {
    return ones[number]
  } else if (number < 20) {
    return teens[number - 10]
  } else if (number % 10 === 0) {
    return tens[Math.floor(number / 10) - 2]
  } else {
    return `${tens[Math.floor(number / 10) - 2]}-${ones[number % 10]}`
  }
}
