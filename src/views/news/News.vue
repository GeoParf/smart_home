<template>
  <!-- News -->
  <div class="wrapper">
    <h2>НОВОСТИ</h2>
    <div class="news">
      <!-- Новости -->

      <div class="news-card" id="news">
        <article class="card-article">
          <div class="news-card__title">
            <h3>Третья новость</h3>
          </div>
          <div class="news-card__data">02.09.2022 02:30</div>
          <div class="news-card__text">
            <p>Я написал первую новость на этом сайте</p>
          </div>
        </article>
        <img
          src="@/assets/images/watercolor-4116932.png"
          alt="Здесь картинка новости"
          class="news-card__img"
        />
      </div>

      <div class="news-card">
        <article class="card-article">
          <div class="news-card__title">
            <h3>Вторая новость</h3>
          </div>
          <div class="news-card__data">02.09.2022 02:06</div>
          <div class="news-card__text">
            <p>Я написал первую новость на этом сайте</p>
          </div>
        </article>
        <img
          src="@/assets/images/watercolor-4116932.png"
          alt="Здесь картинка новости"
          class="news-card__img"
        />
      </div>

      <div class="news-card">
        <article class="card-article">
          <div class="news-card__title">
            <h3>Первая новость</h3>
          </div>
          <div class="news-card__data">02.09.2022 01:40</div>
          <div class="news-card__text">
            <p>Я написал первую новость на этом сайте</p>
          </div>
        </article>
        <img
          src="@/assets/images/watercolor-4116932.png"
          alt="Здесь картинка новости"
          class="news-card__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style>
</style>