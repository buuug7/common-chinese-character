<template>
  <div class="WordFrequency mb-4">
    <div class="text-center p-1">
      只列入出现次数大于50次的词, 下载自<a href="http://corpus.zhonghuayuwen.org/Resources.aspx" target="_blank">语料库在线网站</a> ({{total}})
    </div>

    <div class="pagination p-2">
      <button class="btn small mx-1" @click="handlePrePage">上一页</button>
      <button class="btn small mx-1" @click="handleNextPage">下一页</button>
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
  </div>
</template>
<script>
export default {
  name: "WordFrequency",

  data() {
    return {
      rawData: [],
      total: 0,
      totalPage: 0,
      data: [],
      pageSize: 100,
      page: 1,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      import(`../res/CorpusWordlist.json`)
        .then((module) => module.default)
        .then((res) => {
          this.rawData = res;
          this.total = res.length;
          this.totalPage = this.calculateTotalPage();
          this.data = res.slice(0, this.pageSize);
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
  },
};
</script>

<style>
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  justify-content: center;
}

.item {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 2rem;
  background-color: #eceff1;
  color: black;
  position: relative;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
}

.item .id {
  position: absolute;
  font-size: 12px;
  top: 0;
  right: 0;
  padding: 0.2rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
