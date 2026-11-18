function proveritPokazatel(znachenie) {
    return new Promise(function(uspeh, proval) {
        setTimeout(function() {
            if (znachenie > 0) {
                uspeh("Показатель в норме");
            } else {
                proval(new Error("Показатель ниже нормы"));
            }
        }, 1000);
    });
}

proveritPokazatel(5)
    .then(function(itog) {
        console.log(itog);
    })
    .catch(function(oshibka) {
        console.log(oshibka.message);
    });

proveritPokazatel(-5)
    .then(function(itog) {
        console.log(itog);
    })
    .catch(function(oshibka) {
        console.log(oshibka.message);
    });
