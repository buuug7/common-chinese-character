<template>
<div class="CommonChineseCharacter">
  <Nav :current="currentCategory" @click="currentCategory = $event" />
  <h3 class="text-center">{{ currentCategory }}</h3>
  <List :current="currentCategory" />
</div>
</template>

<script>
import Nav from './Nav.vue'
import List from './List.vue'
export default {
  name: 'CommonChineseCharacter',
  data() {
    return {
      currentCategory: "A",
    }
  },
  components:{
    Nav,List
  },
  methods: {
  }

}
</script>
