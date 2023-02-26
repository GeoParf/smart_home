<template>
  <div class="electricity">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/lamp.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Управление освещением</h2>
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
        <img src="@/assets/images/svg/diagram.svg" alt="" />
        <p>
          Экономьте до 35% электроэнергии за счет интеллектуального управления
          осветительными приборами.
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/comfort.svg" alt="" />
        <p>
          Удобство удаленного управления ощущаются с первых дней пользования.
        </p>
      </div>
      <div class="advantages-item">
        <img src="@/assets/images/svg/lightTimer.svg" alt="" />
        <p>
          Имитация присутствия. Система в случайном порядке будет зажигать свет
          в помещениях, пока Вас нет дома, что бы создать эффект того что дома
          кто то есть.
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
  name: "Electrisity",
  components: {
    Calculator,
  },
};
</script>

<style>
</style>