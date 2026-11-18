async function poluchitSostoyanie() {
  const otvetServera = await fetch("https://wttr.in/Moscow?format=j1");
  const dannyeSvodki = await otvetServera.json();
  const tekushcheeSostoyanie = dannyeSvodki.current_condition[0];

  console.log(`Температура: ${tekushcheeSostoyanie.temp_C}°C`);
  console.log(`Влажность: ${tekushcheeSostoyanie.humidity}%`);
  console.log(`Состояние: ${tekushcheeSostoyanie.weatherDesc[0].value}`);
}

poluchitSostoyanie();
