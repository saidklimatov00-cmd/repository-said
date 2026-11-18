const sotrudnikPervyy = { imya: 'Евгений', otdel: 'ВЕБ-25' };
const sotrudnikVtoroy = { imya: 'Степан', otdel: 'ВЕБ-26' };

function pokazatSvedeniya() {
    console.log(this.imya, this.otdel);
}

sotrudnikPervyy.pokazatSvedeniya = pokazatSvedeniya;
sotrudnikVtoroy.pokazatSvedeniya = pokazatSvedeniya;

sotrudnikPervyy.pokazatSvedeniya();
sotrudnikVtoroy.pokazatSvedeniya();

let poteryannyyKontekst = sotrudnikPervyy.pokazatSvedeniya;
poteryannyyKontekst();
