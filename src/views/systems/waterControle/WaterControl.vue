<template>
  <div class="water-control">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/drops.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Контроль протечек</h2>
        <p>
          Управление светом в Вашем доме теперь будет возможно не только
          классическим способом, но и удаленно, со смартфона, планшета или ПК.
          Система может быть дополнена датчиками присутствия, что позволит
          отключать свет в помещениях где в текущий момент нет человека.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/yoga.svg" alt="" />
        <p>
          Будьте спокойны за сантехнику уходя из дома. В случае протечки система
          гарантированно перекроет воду и известит Вас.
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/comfort.svg" alt="" />
        <p>
          Удобство удаленного управления ощущаются с первых дней пользования.
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/coin-pig.svg" alt="" />
        <p>
          Стоимость установки системы в стандартном санузле в квартире в 25раз
          меньше стоимости возможного ущерба от протечки.
        </p>
      </div>
    </div>

    <div class="green-line"></div>

    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/calculator/Calculator.vue";
export default {
  name: "waterControl",
  components: {
    Calculator,
  },
};
</script>

<style>
</style>