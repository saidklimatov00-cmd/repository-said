function skolkoVsegoDolgov(n) {
  if (n === 1) {
    return 1;
  }
  return n + skolkoVsegoDolgov(n - 1);
}

console.log(skolkoVsegoDolgov(1));
console.log(skolkoVsegoDolgov(3));
console.log(skolkoVsegoDolgov(5));
