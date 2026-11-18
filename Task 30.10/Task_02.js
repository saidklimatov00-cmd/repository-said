const zhurnalZayavok = new Map();

zhurnalZayavok.set('Kuznecov', 'течет кран, кв. 12');
zhurnalZayavok.set('Morozova', 'засор на кухне, кв. 45');
zhurnalZayavok.set('Belov', 'сломан унитаз, кв. 7');

console.log("что у Морозовой:", zhurnalZayavok.get('Morozova'));

zhurnalZayavok.delete('Belov');

console.log("сколько заявок осталось:", zhurnalZayavok.size);
console.log("Белов еще висит?:", zhurnalZayavok.has('Belov'));

const ktoZvonil = [...zhurnalZayavok.keys()];
console.log("список клиентов:", ktoZvonil);

zhurnalZayavok.forEach(function(zayavka, familiya) {
  console.log(familiya + " звонит: " + zayavka);
});
