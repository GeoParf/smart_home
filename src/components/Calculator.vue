<template>
  <div class="calculator">
    <div class="advantages-title">
      <h2>Калькулятор стоимости:</h2>
    </div>
    <div class="option">
      <div class="electric-equipment">
        <div>
          <span>
            <h3 class="option-title">Основное электронное оборудование:</h3>
          </span>
        </div>
        <div class="option-list">
          <ul>
            <CalcItem v-for="item of eeItems" :key="item.id" :item="item">
            </CalcItem>
          </ul>
        </div>
      </div>

      <div class="mounting-hardware">
        <div>
          <span>
            <h3 class="option-title">Монтажное оборудование:</h3>
          </span>
        </div>
        <div class="option-list">
          <ul>
            <CalcItem v-for="item of meItems" :key="item.id" :item="item">
            </CalcItem>
          </ul>
        </div>
      </div>

      <div class="assembly-work">
        <div>
          <span><h3 class="option-title">Монтажные работы:</h3></span>
        </div>
        <div class="option-list">
          <ul>
            <CalcItem v-for="item of mwItems" :key="item.id" :item="item">
            </CalcItem>
          </ul>
        </div>
      </div>
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
import CalcItem from "@/components/items/calcItem.vue";
export default {
  name: "Calculator",
  components: { CalcItem },
  data() {
    return {
      totalPrice: 0,
      chousend: [],
      items: items,
      eeItems: [],
      meItems: [],
      mwItems: [],
    };
  },

  computed: {},

  methods: {
    getList(type) {
      const list = this.items.filter((el) => el.category == type);
      return list;
    },

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

  mounted() {
    console.log(this.$route.path);
    if (this.$route.path === "/electrisity") {
      this.eeItems = this.getList("ee");
      this.meItems = this.getList("me");
      this.mwItems = this.getList("mw");
    }
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