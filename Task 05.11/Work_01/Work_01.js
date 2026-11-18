var zagolovokZayavki = document.getElementById('zagolovok-zayavki');
var opisanieZayavki = document.getElementById('opisanie-zayavki');
var knopkaObnovleniya = document.getElementById('knopka-obnovleniya');

knopkaObnovleniya.addEventListener('click', function() {
    zagolovokZayavki.textContent = 'Заявка зарегистрирована';
    opisanieZayavki.textContent = 'Данные переданы в обработку';
});
