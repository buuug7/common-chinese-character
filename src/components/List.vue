<template>
  <div class="list">
    <Item v-for="item in items" :item="item"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  props: ["current"],

  components: {
    Item
  },

  data() {
    return {
      items: []
    };
  },

  mounted() {
    this.getData(this.current);
  },

  watch: {
    current() {
      this.getData(this.current);
    }
  },

  methods: {
    getData(category) {
      fetch(`/static/${category}.json`)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.items = json.data;
        });
    }
  }
};
</script>

<style>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 170px);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  justify-content: center;
}
</style>
