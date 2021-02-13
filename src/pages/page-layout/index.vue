<template>
  <div class="page">
    <!--  <img class="page__logo" alt="Weidian logo" src="./assets/weidian.png" /> -->
    <One :text="message"></One>
  </div>
</template>

<script>
// 导航模块
import One from './components/one.vue'

export default {
  components: {
   One: One
  },
  data() {
    return {
      message: 'Hello World'
    }
  }
}
</script>

<style lang="less">
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40rpx;
  text-align: center;
}

.page__logo {
  width: 20%;
}
</style>
