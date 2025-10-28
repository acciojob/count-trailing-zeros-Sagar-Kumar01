function trailingZeros(n) {
  n = Number(n);
  if (n === 0) return 0;

  // calculate factorial
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  // count trailing zeros
  let c = 0;
  while (fact % 10 === 0) {
    c++;
    fact = Math.floor(fact / 10);
  }

  return c;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));