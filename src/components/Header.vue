<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <div class="logo">
          <img
            class="logo__img"
            src="@/assets/icones/headerGearHome.png"
            alt=""
          />
        </div>
      </router-link>
      <div class="header-text">
        <span class="name">
          <h1 class="header-header">Система домашней автоматизации</h1>
        </span>
        <span class="slogan"
          >Доверьтесь автоматике - осводбодите себя от рутинных задач</span
        >
      </div>
    </div>

    <!-- Nav Menu -->

    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/servises">Услуги</router-link>
        </li>
        <!-- <li>
          <router-link to="/news">Новости</router-link>
        </li> -->
        <li>
          <router-link to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>