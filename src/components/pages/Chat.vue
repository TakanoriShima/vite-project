<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'
import Send from '../chat/Send.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";

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
    data.user = getAuth().currentUser;
    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid // 追加
      data.chat.push(chatData)
      const db = getDatabase();
      push(ref(db, 'chat'), chatData);
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