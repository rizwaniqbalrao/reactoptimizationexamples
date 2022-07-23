export const calculatePrime = (num) => {
  console.log(`${num} nth prime `);

  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};

export const calculateFib = (n) => {
  console.log(`${n} nth fib `);

  var x = 0;
  var y = 1;
  if (n <= 2) {
    return n - 1;
  }
  for (var i = 0; i < n; i++) {
    var tempY = y;
    y = tempY + x;
    x = tempY;
  }
  return y;
};

export const calculateEven = (num) => {
  console.log(`${num} nth even `);

  const next = num * 2;
  const res = next - 2;
  return res;
};

export const calculateOdd = (n) => {
  console.log(`${n} nth odd `);
  return 2 * n - 1;
};

export const suffixOf = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
};
