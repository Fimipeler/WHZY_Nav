<template>
  <div id="wrapper">
    <transition-group name="list" tag="ul" mode="out-in">
      <li v-for="(item,index) in piclist" :key="item.url" :style="config[index]">
        <img :src="item.url">
      </li>
    </transition-group>
    <a href="javascript:;" id="arrLeft" class="prev" @click="turnleft"></a>
    <a href="javascript:;" id="arrRight" class="next" @click="turnright"></a>
    <!-- <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
    <div class="d"></div>
    <div>
      <Button @click="turnIt">动起来</Button>
    </div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      piclist: [
        { url: require("@/assets/img/二维码背景1.png") },
        { url: require("@/assets/img/二维码背景2.png") },
        { url: require("@/assets/img/二维码背景3.png") }
      ],
      //文件图片配置
      config: [
        {
          position: "absolute",
          width: "800px",
          height: "300px",
          top: "200px",
          left: "40px",
          opacity: 1,
          zIndex: 5,
          transition: "1s"
        },
        {
          position: "absolute",
          width: "720px",
          height: "270px",
          left: "80px",
          top: "400px",
          opacity: 1,
          zIndex: 4,
          transition: "1s"
        },
        {
          position: "absolute",
          width: "640px",
          height: "240px",
          left: "120px",
          top: "600px",
          opacity: 1,
          zIndex: 3,
          transition: "1s"
        }
      ],
      previous: 0,
      now: Date.now()
    }
  },
  computed: {},
  created () {},
  mounted () {

  },
  methods: {
    //turnIt () {}
  //实现点击按钮切换的动画，设置时间参数防止多次点击
    turnleft: function() {
      this.now = Date.now();
      if (this.now - this.previous > 1000) {
        this.config.push(this.config.shift());
        this.previous = this.now;
      }
    },
    turnright: function() {
      this.now = Date.now();
      if (this.now - this.previous > 1000) {
        this.config.unshift(this.config.pop());
        this.previous = this.now;
      }
    }
  },
  destroyed () {}
}
</script>

<style lang="stylus" scoped>
// .a {
//   width: 250px;
//   height: 150px;
//   background-color: red;
// }
// .b {
//   width: 225px;
//   height: 135px;
//   background-color: blue;
// }
// .c {
//   width: 200px;
//   height: 120px;
//   background-color: yellow;
// }
// .d {
//   width: 175px;
//   height: 105px;
//   background-color: green;
// }
* {
  margin: 0;
  padding: 0;
}
#wrapper {
  margin: auto;
  height: 500px;
  width: 79%;
  position: relative;
}
ul {
  list-style: none;
}
li img {
  width: 100%;
  height: 100%;
}
.prev,
.next {
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  top: 50%;
  margin-top: -56px;
  overflow: hidden;
  text-decoration: none;
  background-color: aqua;
  z-index: 5;
  opacity: 1;
}
// .picleft {
//   width: 400;
//   top: 20;
//   left: 50;
//   opacity: 0.2;
//   z-index: 2;
// }
// .piccenter {
//   width: 800;
//   top: 100;
//   left: 200;
//   opacity: 1;
//   z-index: 4;
// }
// .picright {
//   width: 400;
//   top: 20;
//   left: 750;
//   opacity: 0.2;
//   z-index: 2;
// }
</style>
