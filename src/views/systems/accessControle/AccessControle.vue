<template>
  <div class="access-controle">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/access-term.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Контроль доступа</h2>
        <p>
          Система контроля доступа (домофон) с возможностью удаленного
          управления.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/videocam.svg" alt="" />
        <p>Визуальная фиксация гостя. С возможностью сохранения фотографии.</p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/jail.svg" alt="" />
        <p>Удаленный прием вызова с домофона и управление замком калитки.</p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/comfort.svg" alt="" />
        <p>
          Удобство удаленного управления ощущаются с первых дней пользования.
        </p>
      </div>
    </div>

    <div class="green-line"></div>

    <!-- <Calculator /> -->
  </div>
</template>

<script>
import Calculator from "@/components/calculator/Calculator.vue";
export default { components: { Calculator } };
</script>

<style>
</style>