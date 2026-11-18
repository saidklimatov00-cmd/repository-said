const beguny = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }
];

const strokiBegunov = beguny.map(function(uchastnik) {
  return JSON.stringify(uchastnik);
});
const bezPovtorov = new Set(strokiBegunov);
const unikalnyeBeguny = [...bezPovtorov].map(function(s) {
  return JSON.parse(s);
});
console.log("без дублей:", unikalnyeBeguny);

const poMestam = new Map();

unikalnyeBeguny.forEach(function(uchastnik) {
  if (!poMestam.has(uchastnik.grade)) {
    poMestam.set(uchastnik.grade, []);
  }
  poMestam.get(uchastnik.grade).push(uchastnik.name);
});

poMestam.forEach(function(imena, mesto) {
  console.log("Место " + mesto + ": " + imena.join(", "));
});

const vseMesta = [...poMestam.keys()];
console.log("какие места вообще есть:", vseMesta);
