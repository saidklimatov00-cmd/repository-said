async function poluchitSvodku() {
  const otvetServera = await fetch("https://wttr.in/Moscow?format=j1");
  const dannyeSvodki = await otvetServera.json();
  console.log(dannyeSvodki);
}

poluchitSvodku();
