<template>
  <div class="item">
    <span class="num">{{ item.id }}</span>
    <span class="pin-yin">{{ item.pinYin }}</span>
    <span class="text">{{ item.text }}</span>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
.item {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 2rem;
  background-color: #eceff1;
  /*border: 1px solid rgba(255, 0, 0, 0.8);*/
  color: black;
  position: relative;
  text-align: center;
  padding: 1rem;
}

.item .num {
  position: absolute;
  font-size: 12px;
  top: 0;
  right: 0;
  padding: 0.2rem;
  /*background-color: rgba(255, 255, 255, 1);*/
}

.item .pin-yin {
  font-size: 20px;
}
</style>
