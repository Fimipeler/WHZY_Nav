<template>
  <div class="floor-page">
    <header class="header">
      <img :src="logo" class="logo" />
    </header>
    <main class="main">
      <div class="main-floor" style="position: relative;">
        <div class="floor-tip-img">
          <img src="../assets/img/楼层.png" />
          <span class="floor-num">{{ floorId + "F" }}</span>
        </div>
        <div class="floor-detail-img">
          <img class="floor-img" :src="floorUrl" />
        </div>
        <!-- 返回按钮 -->
        <img class="rebackImg" :src="rebackImg" @click="reback" />
      </div>
      <div class="main-room-list">
        <div class="guess-you-to">
          <div class="guess-top">
            <div class="left"></div>
            <div class="middle">
              {{ floorName }}
              <img class="titleImg" :src="titleImg" />
            </div>
            <div class="right"></div>
          </div>
          <div class="scroll-box">
            <div class="scroll-container">
              <div class="guess-bottom-first">
                <roomBtn
                  class="guess-bottom-btn"
                  v-for="(item, index) in guessRoomListFirst"
                  :key="index"
                  :name="item.name"
                  :id="item.id"
                ></roomBtn>
              </div>
              <div class="guess-bottom-second">
                <roomBtn
                  class="guess-bottom-btn"
                  v-for="(items, index) in guessRoomListSecond"
                  :key="index"
                  :name="items.name"
                  :id="items.id"
                ></roomBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">©&nbsp;百智诚远</footer>
    <Modal
      v-model="modal1"
      width="1080px"
      :mask-closable="false"
      footer-hide
      class-name="vertical-center-modal"
      :closable="false"
    >
      <div class="modal-container">
        <div class="overtime-header">
          <img src="../assets/img/超时提示.png" />
        </div>
        <div class="overtime-tip">
          <!--提示语-->
          <p>为了保护您的个人隐私</p>
          <p>
            将在
            <span>{{ countDownTime }}</span
            >秒后返回主页
          </p>
        </div>
        <div class="sure-cancel">
          <div class="modalbtn" @click="toIndex">确认离开</div>
          <div class="modalbtn" @click="closeCountDown">继续使用</div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import roomBtn from "@/views/common/Button"
export default {
  components: {
    roomBtn
  },
  data () {
    return {
      // 超时提醒倒计时
      countDownTime: 10,
      // 超时弹框
      modal1: false,
      // 第一行功能室
      guessRoomListFirst: [
        {
          id: 0,
          name: "诉讼服务中心"
        },
        {
          id: 1,
          name: "调解室"
        },
        {
          id: 2,
          name: "陪审员接待室"
        },
        {
          id: 3,
          name: "信访室"
        },
        {
          id: 4,
          name: "执行服务台"
        },
        {
          id: 5,
          name: "大法庭"
        }
      ],
      // 第二行功能室
      guessRoomListSecond: [
        {
          id: 3,
          name: "信访室"
        },
        {
          id: 4,
          name: "执行服务台"
        },
        {
          id: 5,
          name: "大法庭"
        },
        {
          id: 6,
          name: "中法庭"
        },
        {
          id: 7,
          name: "小法庭"
        }
      ],
      logo: require("@/assets/img/logo.png"),
      rebackImg: require("@/assets/img/首页.png"),
      titleImg: require("@/assets/img/楼层效果.png"),
      // 楼层名
      floorName: "一层",
      // 楼层
      floorNum: 1,
      floorId: 1,
      // 图片地址
      floorUrl: null,
      // -------楼层切换配置--------
      piclist: [
        {
          floorId: 4,
          url: require("@/assets/img/floorImg/详情3.gif"),
          floorName: "四层",
          floorNum: 4
        },
        {
          floorId: 3,
          url: require("@/assets/img/floorImg/详情2.gif"),
          floorName: "三层",
          floorNum: 3
        },
        {
          floorId: 2,
          url: require("@/assets/img/floorImg/详情1.gif"),
          floorName: "二层",
          floorNum: 2
        },
        {
          floorId: 1,
          url: require("@/assets/img/floorImg/另1.gif"),
          floorName: "一层",
          floorNum: 1
        }
      ]
    }
  },
  created () {},
  mounted () {
    this.modalShow()
    this.getFloorName()
  },
  methods: {
    getFloorName () {
      // 获取上级路由传递的参数--楼层信息
      // console.log(this.$route.params);
      this.floorName = this.$route.params.name
      this.floorNum = this.$route.params.num
      this.floorId = this.$route.params.floorId
      // 根据参数选择需要加载的楼层图片以及楼层房间
      this.piclist.forEach(item => {
        if (item.floorNum === this.$route.params.num) {
          this.floorUrl = item.url
        }
      })
      // 获取楼层分布明细
      this.$store.state.guessRoomList.forEach(items => {
        if (items.floorNum === this.$route.params.num) {
          if (items.floorList.length <= 4) {
            this.guessRoomListFirst = items.floorList
            this.guessRoomListSecond = ''
          } else if (
            items.floorList.length > 4 &&
            items.floorList.length <= 8
          ) {
            this.guessRoomListFirst = items.floorList.slice(0, 4)
            this.guessRoomListSecond = items.floorList.slice(4, 7)
          } else {
            this.guessRoomListFirst = items.floorList.slice(
              0,
              Math.floor(items.floorList.length / 2)
            );
            this.guessRoomListSecond = items.floorList.slice(
              Math.ceil(items.floorList.length / 2),
              items.floorList.length + 1
            );
          }
        }
      });
    },
    // 回到首页
    reback () {
      this.$router.push({
        name: "index"
      })
    },

    // 关闭超时提醒
    closeCountDown () {
      this.modal1 = false
      clearInterval(this.clock)
      this.modalShow()
    },
    // 超时确认跳转首页
    toIndex () {
      this.$router.push({ path: "/" })
    },
    // 超时提醒倒计时
    countDown () {
      this.countDownTime = 10
      this.clock = window.setInterval(() => {
        this.countDownTime--
        if (this.countDownTime < 0) {
          clearInterval(this.clock)
          // 当倒计时小于0时清除定时器
          this.$router.push({ path: "/" })
        }
      }, 1000)
    },
    // 添加定时器监听用户操作--如果一分钟不操作，弹出modal
    modalShow () {
      if (this.modal1 === false) {
        this.modalInterval = setInterval(() => {
          this.modal1 = true
          clearInterval(this.modalInterval)
          this.countDown()
        }, 120000)
      }
    }
  },
  destroyed () {
    clearInterval(this.modalInterval)
  }
};
</script>

<style lang="stylus">
.floor-page {
  ::-webkit-scrollbar {
    display: none;
  }

  width: 100vw;
  min-height: 100vh;
  background: url('../assets/img/background_img.png');
  background-size: 100% 100%;

  .header {
    height: 13.8vh;
    text-align: center;

    img {
      width: 66vw;
    }

    .logo {
      margin-top: 2vh;
    }
  }

  .main {
    height: 86.19vh;

    .main-floor {
      height: 54vh;
      padding-top: 1.8vh;

      .floor-tip-img {
        position: relative;
        height: 6.8vh;

        img {
          width: 37.5vw;
          height: 6.8vh;
          display: block;
          position: relative;
          left: 29.5%;
        }

        .floor-num {
          position: absolute;
          display: inline-block;
          width: 18.5%;
          height: 4.1%;
          left: 42%;
          top: 14%;
          color: #fff;
          text-align: center;
          font-size: 4.3vw;
          line-height: 260%;
        }
      }

      .rebackImg {
        width: 16vw;
        position: absolute;
        bottom: -5vh;
        right: 5vw;
        background-color: #01132a;
        border-radius: 50%;
      }

      .floor-detail-img {
        height: 41.6vh;
        overflow: hidden;
        img {
          width: 140vw;
          margin-left: -20vw;
        }
      }
    }

    .main-room-list {
      height: 30vh;

      .guess-you-to {
        height: 100%;
        overflow: hidden;
        background: url('../assets/img/guess-you-like.gif') no-repeat;
        background-size: 100%;

        .guess-top {
          height: 5.2vh;
          margin-top: 1.406vh;
          margin-bottom: 1vw;
          display: flex;
        }

        .left {
          width: 33.33%;
        }

        .middle {
          position: relative;
          width: 33.33%;
          font-size: 6vw;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          font-family: 'SourceHanSansSC-Regular';
          line-height: 50%;

          .titleImg {
            position: relative;
            top: -0.4vh;
            width:100%
          }
        }

        .right {
          width: 33.33%;
        }

        .scroll-box {
          overflow-x: scroll;
          padding: 0 2vw 0 2vw;
          padding-left: 3.611vw;

          .scroll-container {
            width: 100%;
            overflow: hidden;
          }

           .guess-bottom-first, .guess-bottom-second {
            display: flex;
            height:7.75vh;
            .guess-bottom-btn {
              min-width: 20.7vw;
              min-height: 10.926vw;
            }
          }
        }
      }
    }
  }

  .footer {
    font-size: 2vw;
    line-height: 4.629vw;
    text-align: center;
    margin-top: -5vw;
    color: white;
  }
}

/*
// .guess-bottom-first,.guess-bottom-second {
//   animation: anim 60s linear infinite alternate;
// }

// @keyframes anim {
//   0: {
//     margin-left: 0;
//   }

//   100% {
//     margin-left: -72.9935vw;
//   }
// }
*/
</style>
