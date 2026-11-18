const zapchastiNaSklade = [
  { nazvanie: "Карбюратор", cena: 75000, tip: "Двигатель" },
  { nazvanie: "Свеча", cena: 1500, tip: "Расходники" },
  { nazvanie: "Ремень", cena: 3500, tip: "Расходники" },
  { nazvanie: "Радиатор", cena: 22000, tip: "Двигатель" },
  { nazvanie: "Фильтр", cena: 5000, tip: "Расходники" }
];

zapchastiNaSklade.forEach(function(detalka) {
  console.log(detalka.nazvanie + " стоит " + detalka.cena + " рэ, всё путем");
});

const deshevyeDetali = zapchastiNaSklade.filter(function(detalka) {
  return detalka.cena < 5000;
});
console.log("что подешевле:", deshevyeDetali);

const spisokNazvaniy = zapchastiNaSklade.map(function(detalka) {
  return detalka.nazvanie;
});
console.log("как зовут детали:", spisokNazvaniy);

const pervayaDvigatelnaya = zapchastiNaSklade.find(function(detalka) {
  return detalka.tip === "Двигатель";
});
console.log("первая по движку:", pervayaDvigatelnaya);

const cenySoSkidkoy = zapchastiNaSklade.map(function(detalka) {
  return detalka.cena * 0.9;
});
console.log("после скидки:", cenySoSkidkoy);

const rashodnikiDeshevye = zapchastiNaSklade.filter(function(detalka) {
  return detalka.tip === "Расходники" && detalka.cena <= 4000;
});
const imenaRashodnikov = rashodnikiDeshevye.map(function(detalka) {
  return detalka.nazvanie;
});
console.log("дешманские расходники:", imenaRashodnikov);
