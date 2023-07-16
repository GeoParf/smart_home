<template>
  <li class="option-item">
    <!-- Счетчик количества, если есть такая опция -->
    <div v-if="item.isMarked">
      <div v-show="item.amount" class="item-amount">
        <button class="minus btn_plus-minus" @click="minusAmount"></button>
        <span class="amount-number">{{ amount }}</span>
        <button class="plus btn_plus-minus" @click="plusAmount"></button>
      </div>
    </div>

    <input
      class="input-checkbox"
      @change="chouseEliment(item)"
      :id="id"
      :checked="item.isMarked"
      type="checkbox"
      :value="item.price"
    />
    <span class="item-text">{{ item.text }}</span>
  </li>
</template>

<script>
export default {
  name: "calcItems",
  props: ["item", "id"],
  data() {
    return {
      amount: this.item.amount,
    };
  },

  methods: {
    calculate() {
      this.$parent.calculate();
    },

    chouseEliment(item) {
      if (!item.isMarked) {
        this.amount = 1;
        this.item.totalElement = this.item.price;
        this.$parent.chouseEliment(item);
        item.isMarked = true;
      } else {
        this.$parent.unchouseEliment(item);
        item.isMarked = false;
        this.amount = 0;
      }
      this.calculate();
    },

    plusAmount() {
      this.amount++;
      this.item.totalElement += this.item.price;
      this.calculate();
      this.item.isMarked = true;
    },

    minusAmount() {
      this.amount--;
      this.item.totalElement -= this.item.price;
      if (this.amount < 1) {
        this.item.isMarked = false;
        this.amount = 0;
        this.item.totalElement = 0;
        this.$parent.unchouseEliment(this.item);
      }
      this.calculate();
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style>
.option-item {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.item-amount {
  z-index: 1;
  position: absolute;
  left: -37px;
  display: flex;
  width: 67px;
  border: none;
}

.amount-number {
  width: 14px;
  height: 10px;
  font-size: 10px;
  text-align: center;
}
.btn_plus-minus {
  width: 10px;
  height: 10px;
  border: none;
  background-color: #fff;
}
.plus {
  background-size: 10px 10px;
  background-image: url("@/assets/icones/up_btn.png");
}

.minus {
  background-size: 10px 10px;
  background-image: url("@/assets/icones/down_btn.png");
}

.input-checkbox {
  margin-right: 3px;
  z-index: 10;
}
</style>