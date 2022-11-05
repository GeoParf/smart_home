<template>
  <div class="curtains-controle">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/garage.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Управление шторами/жалюзи</h2>
        <p>
          Система климатического контроля автоматически будет поддерживать
          заданный Вами порог температуры во всех помещениях. Сюда также
          относится и система управления теплыми полами и вентиляцией.
        </p>
      </div>
    </div>

    <Calculator />

    <img src="@/assets/images/curtains.jpg" alt="" />
  </div>
</template>

<script>
import Calculator from "@/components/calculator/Calculator.vue";
export default {
  name: "curtainsControle",
  components: {
    Calculator,
  },
};
</script>

<style>
</style>