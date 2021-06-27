<template>
  <div class="tab">
    <div
      :class="`tab-item ${selectedItem === item ? 'selected' : ''}`"
      :key="item"
      v-for="item in items"
      @click="$emit('change', item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    items: Array,
    selectedItem: String,
  },
};
</script>

<style lang="scss">
.tab {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  .selected {
    color: rgb(0, 0, 238);
  }

  .tab-item {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border: 1px solid #eee;
  }
}
</style>
