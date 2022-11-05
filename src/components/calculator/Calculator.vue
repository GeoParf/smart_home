<template>
  <div class="calculator">
    <div class="advantages-title">
      <h2>Калькулятор стоимости:</h2>
    </div>
    <div class="option">
      <!-- Отрисовка колонок калькулятора -->
      <calcColumn v-for="column of columns" :key="column" :category="column" />
      <!-- Рассчет итоговой суммы -->
    </div>
    <p class="total">
      Итого:
      <span class="total-price">{{ totalPrice }}</span>
      <span> руб</span>
    </p>
    <p class="disclimer">
      *Стоимость рассчитанная в калькуляторе на сайте носит ознакомительный
      характер.
    </p>
  </div>
</template>

<script>
import items from "@/components/items/static/servisesList.json";
import categoryType from "@/components/items/static/categoryType.json";
import CalcItem from "@/components/calculator/items/calcItem.vue";
import calcColumn from "./items/calcColumn.vue";
export default {
  name: "Calculator",
  components: { CalcItem, calcColumn },
  data() {
    return {
      category: categoryType,
      items: items,
      totalPrice: 0,
      path: this.$route.path,
      chousend: [],
    };
  },

  computed: {
    columns() {
      if (this.path === "/electrisity") {
        return this.category.electrisity;
      } else if (this.path === "/wi-fi") {
        return this.category.wifi;
      } else if (this.path === "/access-controle") {
        return this.category.accessControle;
      } else if (this.path === "/climate-controle") {
        return this.category.climatControle;
      } else if (this.path === "/video-controle") {
        return this.category.vidioControle;
      } else if (this.path === "/alert-controle") {
        return this.category.alertControle;
      } else if (this.path === "/curtains-controle") {
        return this.category.curtansControle;
      } else if (this.path === "/water-controle") {
        return this.category.waterControle;
      } else if (this.path === "/audio-controle") {
        return this.category.audioControle;
      }
    },
  },
  methods: {
    chouseEliment(item) {
      this.chousend.push(item);
      this.calculate();
    },

    unchouseEliment(item) {
      item.totalElement = 0;
      this.chousend.splice(this.chousend.indexOf(item), 1);
      this.calculate();
    },

    calculate() {
      let result = 0;
      if (this.chousend.length) {
        this.chousend.forEach((el) => {
          result += el.totalElement;
        });
        this.totalPrice = result;
      } else {
        this.totalPrice = 0;
      }
    },
  },
};
</script>

<style>
.option {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  text-align: left;
}
.option-title {
  display: inline;
}
.option-list {
  width: 320px;
}
.total {
  text-align: left;
}
.total-price {
  margin-left: 10px;
}
.disclimer {
  margin-top: 20px;
  text-align: left;
}
.options-width {
  width: 400px;
}
</style>