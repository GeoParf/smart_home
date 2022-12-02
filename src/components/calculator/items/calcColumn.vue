<template>
  <div>
    <div class="electric-equipment">
      <div>
        <span>
          <h3 class="option-title">{{ getTitle }}</h3>
        </span>
      </div>
      <div class="option-list">
        <ul>
          <CalcItem v-for="item of calcItems" :key="item.id" :item="item" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/components/items/static/servisesList.json";
import CalcItem from "@/components/calculator/items/calcItem.vue";
export default {
  name: "CalcColumn",
  components: { CalcItem },
  props: ["category"],

  data() {
    return {
      items: items,
      calcItems: [],
    };
  },

  computed: {
    getTitle() {
      if (this.category === "electric-equipment") {
        console.log(this.category);
        return "Основное электронное оборудование: ";
      } else if (this.category === "mounting-hardware") {
        console.log(this.category);
        return "Монтажное оборудование: ";
      } else if (this.category === "installation-work") {
        console.log(this.category);
        return "Монтажные работы: ";
      }
    },
  },
  methods: {
    getList(type) {
      const list = this.items.filter((el) => el.category == type);
      return list;
    },

    chouseEliment(item) {
      this.$parent.chouseEliment(item);
    },

    unchouseEliment(item) {
      this.$parent.unchouseEliment(item);
    },

    calculate() {
      this.$parent.calculate();
    },
  },

  mounted() {
    this.calcItems = this.getList(this.category);
  },
};
</script>

<style>
.option-title {
  display: inline;
}
.option-list {
  margin-top: 10px;
  width: 320px;
}

.options-width {
  width: 400px;
}
</style>