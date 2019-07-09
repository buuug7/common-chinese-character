<template>
  <div>
    <h2 class="text-center">常用汉字</h2>

    <Nav :current="currentCategory" @click="handleClick"></Nav>

    <h3 class="text-center">{{ currentCategory }}</h3>

    <List :current="currentCategory"></List>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import List from "./components/List.vue";
export default {
  data() {
    return {
      currentCategory: "A"
    };
  },
  components: {
    Nav,
    List
  },

  methods: {
    handleClick(item) {
      this.currentCategory = item;
    }
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
