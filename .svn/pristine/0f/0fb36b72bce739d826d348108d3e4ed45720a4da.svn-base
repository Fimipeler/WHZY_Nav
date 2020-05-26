<template>
  <div class="FloorChooseBtn">
    <div class="noChoose" @click="clickUnChoose">
      {{ floorNum + "F" }}
    </div>
    <div class="choose" @click="clickHasChoose">
      <div class="left-arrow">
        <img :src="leftarrow" />
      </div>
      <div class="chooseFont">
        {{ floorNum + "F" }}
      </div>
      <img class="rotateImg" :src="chooseBtnRotate" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["floorNum", "floorId"],
  data() {
    return {
      noChooseBtn: require("@/assets/img/noChoose.png"),
      chooseBtnRotate: require("@/assets/img/chooseRotate.png"),
      leftarrow: require("@/assets/img/left_arrow.png")
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickUnChoose() {
      // console.log('点击的是未选中的按钮')
      // this.$emit('changChoose', this.floorId)
    },
    clickHasChoose() {
      // console.log('点击的是已经选中的按钮')
      // this.$emit('changChoose', this.floorId)
    }
  }
};
</script>
<style lang="stylus">
.FloorChooseBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.823vh;
  position: relative;
  .choose {
    width: 11.111vw;
    height: 6.46vh;
    color: white;
    font-size: 3.148vw;
    position: relative;
    .rotateImg {
      @-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg)}
        to {-webkit-transform: rotate(360deg)}
      };
      width: 11.1111vw;
      -webkit-transform: rotate(360deg);
      animation: rotation 3s linear infinite;
      -moz-animation: rotation 3s linear infinite;
      -webkit-animation: rotation 3s linear infinite;
      -o-animation: rotation 3s linear infinite;
    }
    .left-arrow {
      width: 3.24vw
      height: 1.823vh
      position: absolute
      left: -2.314vw
      top: 2.1875vh
      display: flex
      align-items: center
      justify-content: center
      img {
        width: 1.481vw
        height: 1.25vh
        @keyframes myfirst{
          from {
            width: 1.481vw;
            height: 1.25vh;
          }
          to {
            width: 2.13vw;
            height: 1.77vh;
          }
        }
        display: block;
        animation: myfirst linear infinite 0.8s alternate;
      }
    }
    .chooseFont {
      width: 7.777vw;
      height: 4.375vh;
      position: absolute;
      left: 1.66667vw;
      top: 1.0417vh;
      text-align: center;
      line-height: 7.777vw;
      background: url('../../assets/img/chooseBack.png') no-repeat;
      background-size:  100%;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .noChoose {
    width: 7.963vw;
    height: 4.48vh;
    background: url('../../assets/img/noChoose.png') no-repeat;
    background-size:  100%;
    color: white;
    font-size: 2.7778vw;
    line-height: 7.963vw;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
}
.choosed {
  .noChoose {
    display: none
  }
}
.notChoosed {
  .choose {
    display: none
  }
}
</style>
