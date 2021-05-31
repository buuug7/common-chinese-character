<template>
  <div class="nav">
    <a
      href="#"
      class="letter"
      :class="{ current: item === current }"
      :key="item"
      @click="$emit('click', item)"
      v-for="item in letters"
    >
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  props: ["current"],
  computed: {
    letters() {
      const letters = [];
      for (let i = 0; i < 26; i++) {
        letters.push(String.fromCharCode(65 + i));
      }
      return letters;
    }
  }
};
</script>

<style>
.letter {
  display: inline-block;
  padding: 1rem;
}

.letter.current {
  text-decoration: none;
  color: black;
  cursor: default;
}
</style>
