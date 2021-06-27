<template>
  <div class="FrequencyUsedWords">
    <div class="loading text-center pt-4" v-if="loading">Loading...</div>
    <div v-else>
      <div class="text-center p-3">
        只列入出现次数大于50次的词, 下载自<a
          href="http://corpus.zhonghuayuwen.org/Resources.aspx"
          target="_blank"
          >语料库在线网站</a
        >
        ({{ total }})
      </div>

      <div class="item-list">
        <div
          class="item"
          v-for="item of data"
          :key="item.id"
          @click="handleClick(item)"
        >
          <div class="id">{{ item.id }}</div>
          <div class="word">{{ item.word }}</div>
        </div>
      </div>
      <div class="pagination p-2">
        <button class="btn small mx-1" @click="handlePrePage">上一页</button>
        <button class="btn small mx-1" @click="handleNextPage">下一页</button>
      </div>
    </div>
  </div>
</template>
<script>
import { output } from "../util";

export default {
  name: "FrequencyUsedWords",

  data() {
    return {
      rawData: [],
      total: 0,
      totalPage: 0,
      data: [],
      pageSize: 100,
      page: 1,
      loading: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      import(`../res/frequency-used-words.json`)
        .then((module) => module.default)
        .then((res) => {
          this.rawData = res;
          this.total = res.length;
          this.totalPage = this.calculateTotalPage();
          this.data = res.slice(0, this.pageSize);
          this.loading = false;
        });
    },

    calculateTotalPage() {
      const { total, pageSize } = this;
      return total % pageSize === 0
        ? total / pageSize
        : parseInt(total / pageSize) + 1;
    },

    handlePrePage() {
      const { page, pageSize, totalPage, rawData } = this;
      const nextPage = page - 1;
      if (nextPage >= 1) {
        this.data = rawData.slice(
          nextPage * pageSize,
          nextPage * pageSize + pageSize
        );

        this.page = nextPage;
      }
    },

    handleNextPage() {
      const { page, pageSize, totalPage, rawData } = this;
      const nextPage = page + 1;
      if (nextPage <= totalPage) {
        this.data = rawData.slice(
          nextPage * pageSize,
          nextPage * pageSize + pageSize
        );

        this.page = nextPage;
      }
    },

    handleClick(item) {
      window.open(
        `https://hanyu.baidu.com/zici/s?wd=${item.word}&query=${item.word}&srcid=28232&from=kg0`
      );
    },

    output() {
      output(this.rawData, "FrequencyUsedWords.json");
    },
  },
};
</script>
