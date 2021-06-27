<template>
  <div class="header display-flex align-items-center mb-2 px-4">
    <div class="header-left display-flex flex-center">
      <img class="header-logo" src="favicon-32x32.png" />
      <div class="display-flex flex-center menu ml-2">
        <div
          class="menu-item mx-1"
          :class="{
            selected: showType === '词语频率表',
          }"
          @click="handleSwitchType('词语频率表')"
        >
          词语频率表
        </div>
        <div
          class="menu-item mx-1"
          :class="{
            selected: showType === '常用字表',
          }"
          @click="handleSwitchType('常用字表')"
        >
          常用字表
        </div>
      </div>
    </div>
    <div class="header-right">
      <button class="btn small primary ml-2" @click="$emit('output')">
        导出
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["showType"],
  methods: {
    handleSwitchType(type) {
      this.$emit("typeChanged", type);
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: #fff;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  box-shadow: 0 6px 6px rgb(31 107 255 / 5%);
  position: fixed;
  left: 0;
  top: 0;

  .header-logo {
    width: 32px;
    height: 32px;
    position: relative;
  }

  .menu-item {
    cursor: pointer;
  }

  .menu-item.selected {
    color: blue;
  }
}
</style>
