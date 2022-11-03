<template>
  <div class="video-controle">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/security-camera.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Видеонаблюдение</h2>
        <p>
          Централизованная система видеонаблюдения с системой архивации и
          возможностью удаленного просмотра. Гибкая система цен, зависящая от
          количества, качества камер и требуемых функций.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/videocam.svg" alt="" />
        <p>
          Полный визуальный контроль за вашим имуществом с ведением
          соответствующего архива. Видеозапись-гарантированное доказательство..
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/people.svg" alt="" />
        <p>
          Мгновенное обнаружение постороннего при пересечение периметра вашего
          участка и отправка Вам уведомления.
        </p>
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
export default {
  name: "VideoControl",
  components: {
    Calculator,
  },
};
</script>

<style>
</style>