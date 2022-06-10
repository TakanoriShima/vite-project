<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue' // 追加
import Send from '../chat/Send.vue'

export default defineComponent({
  components: {
    View,
    Send
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    })
    return {
      data
    }
  },
})
</script>

<template>
  <div class="container">
    <View />
    <Send />
  </div>
</template>

<style scoped>

</style>