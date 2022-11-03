<template>
  <div class="alert-control">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/access-term.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Сигнализация</h2>
        <p>
          Система защиты от несанкционированного доступа может включать в себя
          различное количество и тип датчиков, атакже информировать Вас о
          происшетсвие через смс-канал или же специальное приложение.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/notranspass.svg" alt="" />
        <p>Защита вашего имущества от незваных гостей.</p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/redlamp.svg" alt="" />
        <p>
          Своевременное уведомление Вас о посторонних в доме или на участке.
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/comfort.svg" alt="" />
        <p>Удобно и надежно.</p>
      </div>
    </div>

    <div class="green-line"></div>

    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator.vue";
export default {
  name: "alertControle",
  components: { Calculator },
};
</script>

<style>
</style>