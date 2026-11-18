const oborudovanie = { nazvanie: 'Наушники', cena: 5000 };

function pokazatOborudovanie(skidka, gorod) {
    let itogovayaCena = this.cena - (this.cena * skidka / 100);
    console.log("Позиция: " + this.nazvanie);
    console.log("Цена со скидкой: " + itogovayaCena);
    console.log("Город поставки: " + gorod);
}

pokazatOborudovanie.call(oborudovanie, 10, 'Москва');

pokazatOborudovanie.apply(oborudovanie, [15, 'Санкт Петербург']);
