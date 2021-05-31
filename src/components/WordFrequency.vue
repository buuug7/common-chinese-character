<template>
  <div class="WordFrequency">
    <p>只列入出现次数大于50次的词,下载自www.cncorpus.org语料库在线网站</p>

    <div>
      <div v-for="item of data" :key="item.id">{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WordFrequency",

  data() {
    return {
      data: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData() {
      import(`../res/w.json`).then(res => {
        console.log(res)
        console.log(Array.isArray(res))
        this.data = res;
      })
    }
  }
};
</script>
