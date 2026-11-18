let adresaObektov = ['https://wttr.in/Moscow?format=j1', 'https://wttr.inn/Moscow?format=j1', 'https://wttr.in/Paris?format=j1'];

let zaprosyPoObektam = adresaObektov.map(function(adres) {
    return fetch(adres).then(function(otvetServera) { return otvetServera.json(); });
});

Promise.allSettled(zaprosyPoObektam).then(function(itogiPoObektam) {
    itogiPoObektam.forEach(function(itog, nomer) {
        if (itog.status === 'fulfilled') {
            console.log('Объект ' + (nomer + 1) + ': ' + itog.value.current_condition[0].temp_C + '°C');
        } else {
            console.log('Объект ' + (nomer + 1) + ': сбой получения');
        }
    });
});
