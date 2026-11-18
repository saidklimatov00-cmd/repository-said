<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой любимый сериал Во все тяжкие</title>
</head>
<body>

  <header>
    <h1>Во все тяжкие</h1>
    <img src="breaking_bad.jpg" alt="Постер сериала Во все тяжкие">
  </header>

  <main>

    <section>
      <h2>О чём вообще</h2>
      <p>Драматический сериал про школьного учителя химии, который после диагноза рака решает варить мет и втягивается в криминал по самые уши.</p>
    </section>

    <section>
      <h2>Что по фактам</h2>
      <ul>
        <li>Создатель: Винс Гиллиган</li>
        <li>Год старта: 2008</li>
        <li>Жанр: драма, криминал</li>
      </ul>
    </section>

    <section>
      <h2>Где глянуть</h2>
      <p><a href="https://www.imdb.com/title/tt0903747/">IMDb</a></p>
    </section>

    <section>
      <h2>Поставь оценку от 1 до 10</h2>
      <form action="/rate" method="post">
        <p>
          <label for="rating">Оценка:</label>
          <select id="rating" name="rating" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </p>
        <p>
          <button type="submit">Отправить</button>
        </p>
      </form>
    </section>

  </main>

  <footer>
    <p>2026</p>
  </footer>

</body>
</html>
