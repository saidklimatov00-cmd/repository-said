function skolkoZeren(a, n) {
  if (n === 0) {
    return 1;
  }
  return a * skolkoZeren(a, n - 1);
}

console.log(skolkoZeren(2, 0));
console.log(skolkoZeren(2, 3));
console.log(skolkoZeren(3, 2));
console.log(skolkoZeren(5, 3));
