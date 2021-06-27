<template>
  <div>
    <Header
      :showType="showType"
      @typeChanged="showType = $event"
      @output="handleOutput"
    />
    <div class="container">
      <FrequencyUsedWords v-if="showType === '词语频率表'" ref="ref1" />
      <CommonUsedWords v-if="showType === '常用字表'" ref="ref2" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FrequencyUsedWords from "./components/FrequencyUsedWords.vue";
import CommonUsedWords from "./components/CommonUsedWords.vue";
export default {
  data() {
    return {
      showType: "词语频率表",
    };
  },
  components: {
    Header,
    FrequencyUsedWords,
    CommonUsedWords,
  },

  methods: {
    handleOutput() {
      const ref =
        this.showType === "词语频率表" ? this.$refs.ref1 : this.$refs.ref2;
      ref.output();
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #f7f7f7;
}

.container {
  margin-top: 3rem;
}
</style>
