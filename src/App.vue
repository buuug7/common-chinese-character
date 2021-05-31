<template>
  <div>
    <div class="header">
      <Tab
        :items="['常用汉字', '词语频率表']"
        :selectedItem="showType"
        @change="showType = $event"
      />
    </div>
    <div class="container">
      <CommonChineseCharacter v-if="showType === '常用汉字'" />
      <WordFrequency v-if="showType === '词语频率表'" />
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
import CommonChineseCharacter from "./components/CommonChineseCharacter.vue";
import WordFrequency from './components/WordFrequency.vue'

export default {
  data() {
    return {
      showType: "常用汉字",
    };
  },
  components: {
    WordFrequency,
    Tab,
    CommonChineseCharacter,
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
