const specialist = {
  imya: 'Евгений',
  dolzhnost: 'Разработчик',
  otdel: 'IT',
  pokazatKartochku() {
      console.log(this.imya, this.dolzhnost, this.otdel);
  }
};

specialist.pokazatKartochku();

let otdelnyyMetod = specialist.pokazatKartochku;
otdelnyyMetod();

let privyazannyyMetod = specialist.pokazatKartochku.bind(specialist);
privyazannyyMetod();

function pokazatKartochkuVGorode(gorod) {
  console.log(this.imya, this.dolzhnost, this.otdel, gorod);
}

pokazatKartochkuVGorode.call(specialist, 'Москва');
pokazatKartochkuVGorode.apply(specialist, ['Питер']);

let knopkaProverki = document.querySelector('#knopka-proverki');

knopkaProverki.addEventListener('click', function(sobytie) {
  console.log(this);
  console.log(sobytie.currentTarget);
});

knopkaProverki.addEventListener('click', (sobytie) => { //стрелочный обработчик клика
  console.log(this);
  console.log(sobytie.currentTarget);
});
