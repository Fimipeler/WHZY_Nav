<template>
  <div class="wrapper">
    <transition name="firstPic">
      <div class="firstImg" @click="gotoFloorPage('5F (五层)')"></div>
    </transition>
    <transition name="firstPic">
      <div class="secondImg" @click="gotoFloorPage('4F (四层)')"></div>
    </transition>
    <transition name="firstPic">
      <div class="thirdImg" @click="gotoFloorPage('3F (三层)')"></div>
    </transition>
    <transition name="firstPic">
      <div class="forthImg" @click="gotoFloorPage('2F (二层)')"></div>
    </transition>
    <transition name="firstPic">
      <div class="fiveImg" @click="gotoFloorPage('1F (一层)')"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    gotoFloorPage (floorName) {
      this.$router.push(
        {
          name: 'floorpage',
          params: {name: floorName}
        }
      )
    }
  }
}
</script>

<style lang="stylus">
.wrapper {
  position: relative 
  .firstImg {
    background-color: red
    width: 46.3vw
    height: 15.625vh
    z-index: 9
    position: relative
  }
  .secondImg {
    background-color: blue
    width: 41.6667vw
    height: 14.0625vh
    z-index: 8
    position: relative
    top: -1.5625vh‬
  }
  .thirdImg {
    background-color: green
    width: 37.037vw
    height: 12.5vh
    z-index: 7
    position: relative
    top: -3.125vh‬
  }
  .forthImg {
    background-color: yellow
    width: 32.407vw
    height: 10.9375vh‬
    z-index: 6
    position: relative
    top: -4.6875vh‬
  }
  .fiveImg{
    background-color: orange 
    width: 32.407vw
    height: 9.375vh‬
    z-index: 5
    position: relative
    top: -6.25vh
  }
}
</style>
