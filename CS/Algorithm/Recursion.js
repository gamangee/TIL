function powerEx01(base, exponent) {
  if (exponent === 0) return 1;
  return base * powerEx01(base, exponent - 1);
}

function powerEx02(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function factorialEx01(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorialEx01(num - 1);
}

function factorialEx02(num) {
  if (num < 0) return 0;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function productOfArrayEx01(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArrayEx01(arr.slice(1));
}

function productOfArrayEx02(arr) {
  if (arr.length === 0) return 1;
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

function recursiveRangeEx01(x) {
  if (x === 0) return 0;
  return x + recursiveRangeEx01(x - 1);
}

function recursiveRangeEx02(x) {
  if (x === 0) return 0;
  let result = 0;
  for (let i = 1; i <= x; i++) {
    result += i;
  }
}

function fibEx01(n) {
  if (n <= 2) return 1;
  return fibEx01(n - 1) + fibEx01(n - 2);
}

function fibEx02(n) {
  if (n <= 2) return1;
  let prev = 1;
  let next = 1;
  let current;
  for (let i = 3; i <= n; i++) {
    current = prev + next;
    next = prev;
    prev = current;
  }
  return current;
}
