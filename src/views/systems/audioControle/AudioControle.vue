<template>
  <div class="audio-controle">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/music-note.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Аудио-мультирум</h2>
        <p>
          Благодаря системе мультрум , можно создавать различные зоны аудио
          воспроизведения по всему дому.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/headphones.svg" alt="" />
        <p>Полное аудио покрытие всего жилища.</p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/comfort.svg" alt="" />
        <p>
          Удобство удаленного управления ощущаются с первых дней пользования.
        </p>
      </div>
    </div>

    <div class="green-line"></div>

    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator.vue";
export default { components: { Calculator } };
</script>

<style>
</style>