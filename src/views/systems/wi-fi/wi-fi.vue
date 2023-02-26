<template>
  <div class="wi-fi">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/wifi.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Беспроводная компьютерная сеть</h2>
        <p>
          Полное покрытие сетью WiFi Вашего жилища. Гибкая система цен, от
          ретрансляторов до систем бесшовного роуминга, скорости от 100 до
          300Мбит.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/wi-fi.svg" alt="" />
        <p>Полное покрытие сетью WiFi вашей квартиры или коттеджа.</p>
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
export default {
  name: "wi-fi",
  components: {
    Calculator,
  },
};
</script>

<style>
</style>