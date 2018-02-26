export const factorial = (n) => {
  if ( typeof(n) !== 'number') {
    throw ('Invalid argument type. Can only find the factorial of a number')
  } else if (n < 0) {
    throw ('Invalid argument type. Can only find the factorial of a positive number')
  } else if ( n === 0 || n === 1) {
    return 1
  } else {
    let total = 1;
    for (let i = n; i >= 2; i--) {
      total = total * i;
    }
    return total;
  }
};