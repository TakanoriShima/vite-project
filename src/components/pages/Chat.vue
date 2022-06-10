<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'
import Send from '../chat/Send.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineComponent({
  components: {
    View,
    Send
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [
        {
          displayName: "テスト1さん",
          uid: "test1",
          message: "ああああああ",
        },
        {
          displayName: "テスト2さん",
          uid: "test2",
          message: "いいいいい",
        },
        {
          displayName: "テスト3さん",
          uid: "test3",
          message: "ううううう",
        },
      ],
      input: '',
      displayName: ''
    })
    const pushMessage = (chatData) => {
      data.chat.push(chatData) // 引数で受け取ったChatDataを配列にpush
    };
    return {
      data,
      pushMessage
    }
  },
  beforeRouteEnter: (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  }
})
</script>

<template>
  <div class="container">
    <View :data="data" />
    <Send @sendMessage="pushMessage" />
  </div>
</template>

<style scoped>

</style>