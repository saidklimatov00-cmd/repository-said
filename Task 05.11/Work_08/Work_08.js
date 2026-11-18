const specialist = {
    imya: 'Евгений',
    dolzhnost: 'Веб разработчик',
    pokazatSvedeniya() {
        console.log(this.imya, this.dolzhnost);
    }
};

specialist.pokazatSvedeniya();

let otdelnayaFunkciya = specialist.pokazatSvedeniya;
otdelnayaFunkciya();

let privyazannayaFunkciya = specialist.pokazatSvedeniya.bind(specialist);
privyazannayaFunkciya();

const specialistVtoroy = {
    imya: 'Эля',
    dolzhnost: 'Тестировщик'
};

let privyazannayaFunkciyaVtoraya = specialist.pokazatSvedeniya.bind(specialistVtoroy);
privyazannayaFunkciyaVtoraya();
