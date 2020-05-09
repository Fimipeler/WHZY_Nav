<template>
  <div class="inDex" :bac="bac" @click="toDetail">
    <img src="../assets/img/welcome.gif" alt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      bac: ''
    }
  },
  methods: {
    toDetail () {
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="stylus">
.inDex {
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height:100%;
  }
}
</style>
