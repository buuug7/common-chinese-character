<template>
  <div>
    <div class="header">
      <Tab
        :items="['词语频率表', '常用汉字']"
        :selectedItem="showType"
        @change="showType = $event"
      />
    </div>
    <div class="container">
      <WordFrequency v-if="showType === '词语频率表'" />
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
import WordFrequency from "./components/WordFrequency.vue";

export default {
  data() {
    return {
      showType: "词语频率表",
    };
  },
  components: {
    WordFrequency,
    Tab,
  },

  methods: {},
};
</script>

<style>
.header {
  text-align: center;
  display: flex;
  justify-content: center;
}
.text-center {
  text-align: center;
}
</style>
