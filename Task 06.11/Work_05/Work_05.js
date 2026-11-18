function poluchitPokazatelObekta() {
    fetch('https://wttr.in/Moscow?format=j1')
        .then(function(otvetServera) {
            if (!otvetServera.ok) {
                throw new Error('Сбой сети');
            }
            return otvetServera.json();
        })
        .then(function(dannyeSvodki) {
            return dannyeSvodki.current_condition[0];
        })
        .then(function(tekushcheeSostoyanie) {
            return tekushcheeSostoyanie.temp_C;
        })
        .then(function(znachenieTemperatury) {
            console.log('Температура: ' + znachenieTemperatury + '°C');
        })
        .catch(function(oshibka) {
            console.log('Сбой: ' + oshibka.message);
        })
        .finally(function() {
            console.log('Запрос отработан');
        });
}

poluchitPokazatelObekta();
