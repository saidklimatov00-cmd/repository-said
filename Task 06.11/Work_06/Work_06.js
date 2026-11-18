let adresaObektov = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.in/London?format=j1',
    'https://wttr.in/Paris?format=j1'
];

let zaprosyPoObektam = adresaObektov.map(function(adres) {
    return fetch(adres).then(function(otvetServera) {
        return otvetServera.json();
    });
});

Promise.all(zaprosyPoObektam)
    .then(function(svodkiPoObektam) {
        console.log('Москва: ' + svodkiPoObektam[0].current_condition[0].temp_C + '°C');
        console.log('Лондон: ' + svodkiPoObektam[1].current_condition[0].temp_C + '°C');
        console.log('Париж: ' + svodkiPoObektam[2].current_condition[0].temp_C + '°C');
    })
    .catch(function(oshibka) {
        console.log('Сбой: ' + oshibka.message);
    });
