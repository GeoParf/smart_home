<template>
  <div class="climate-controle">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <img
        src="@/assets/images/svg/temperature.svg"
        alt=""
        class="system-header__img"
      />
      <div class="system-header__title">
        <h2>Климатический контроль</h2>
        <p>
          Система климатического контроля автоматически будет поддерживать
          заданный Вами порог температуры во всех помещениях. Сюда также
          относится и система управления теплыми полами и вентиляцией.
        </p>
      </div>
    </div>

    <div class="advantages-title">
      <h2>Преимущества</h2>
    </div>
    <div class="advantage">
      <div class="advantages-item">
        <img src="@/assets/images/svg/winter-house.svg" alt="" />
        <p>Всегда комфортная температура в доме по Вашему желанию.</p>
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
          Экономьте на обогреве. Проще поддерживать температуру на нужном уровне
          чем постоянно нагревать помещение с нуля.
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
    components: { Calculator },
    name: "ClimateControle",
  };
</script>

<style>
</style>