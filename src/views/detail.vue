<template>
  <div class="detail">
    <div class="container-box">
      <header class="header">
        <img :src="logo" class="logo" />
      </header>
      <main class="main">
        <div class="nav-container">
          <div class="reback-title-box">
            <!--返回按钮-->
            <img class="rebackImg" :src="rebackImg" @click="reback" />
            <!--标题底部加深图-->
            <img class="titleImg" :src="titleImg" />
            <div class="title">{{ roomName }}</div>
          </div>
          <div class="navInfoImg">
            <!--这里放入导航的详情gif图-->
            <img :src="roomUrl" alt />
          </div>
        </div>
        <!-- 二维码 -->
        <div class="qrcode-container">
          <div class="qrcode-img">
            <img :src="roomCode" alt />
          </div>
        </div>
      </main>
      <footer class="footer">©&nbsp;百智诚远</footer>
      <Modal
        v-model="modal1"
        width="100%"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 超时提醒倒计时
      countDownTime: 10,
      // 法院功能室列表
      guessRoomList: this.$store.state.guessRoomList,
      logo: require("@/assets/img/logo.png"),
      rebackImg: require("@/assets/img/返回.png"),
      titleImg: require("@/assets/img/楼层效果.png"),
      // 上级路由传值点击btn的信息（name,id）
      roomName: "",
      roomId: 0,
      roomUrl: null,
      roomCode: null,
      // 超时弹框
      modal1: false
    };
  },
  created() {
    
  },
  mounted() {
    this.getParams();
    this.modalShow();
    console.log(this.$route.params.name)
  },
  methods: {
    // 关闭超时提醒
    closeCountDown() {
      this.modal1 = false;
      clearInterval(this.clock);
      this.modalShow();
    },
    // 超时确认跳转首页
    toIndex() {
      this.$router.push({ path: "/" });
    },
    // 超时提醒倒计时
    countDown() {
      this.countDownTime = 10;
      this.clock = window.setInterval(() => {
        this.countDownTime--;
        if (this.countDownTime < 0) {
          clearInterval(this.clock);
          //当倒计时小于0时清除定时器
          this.$router.push({ path: "/" });
        }
      }, 1000);
    },
    // 添加定时器监听用户操作--如果一分钟不操作，弹出modal
    modalShow() {
      if (this.modal1 == false) {
        this.modalInterval = setInterval(() => {
          this.modal1 = true;
          clearInterval(this.modalInterval);
          this.countDown();
        }, 120000);
      }
    },
    reback() {
      this.$router.push({
        path: "/index"
      });
    },
    getParams() {
      this.roomName = this.$route.params.name;
      this.roomId = this.$route.params.id;
      this.guessRoomList.forEach(element => {
        console.log(element);
        element.floorList.forEach(item => {
          if (item["name"] == this.$route.params.name) {
            this.roomUrl = item["url"];
            this.roomCode = item["code"];
          }
        });
      });
    }
  },
  destroyed() {
    clearInterval(this.modalInterval);
  }
};
</script>

<style lang="stylus">
.detail {
  min-height: 100%;

  @keyframes qrcodeBack {
    0% {
      // opacity: 1;
      background: url('../assets/img/二维码背景1.png') no-repeat;
      background-size :100%
    }

    25% {
      // opacity: 0;
      background: url('../assets/img/二维码背景2.png') no-repeat;
      background-size :100%
    }

    50% {
      // opacity: 0;
      background: url('../assets/img/二维码背景3.png') no-repeat;
      background-size :100%
    }

    75% {
      // opacity: 0;
      background: url('../assets/img/二维码背景4.png') no-repeat;
      background-size :100%
    }

    100% {
      // opacity: 0;
      background: url('../assets/img/二维码背景1.png') no-repeat;
      background-size :100%
    }
  }

  width: 100vw;
  height: 100vh;
  background: url('../assets/img/background_img.png') no-repeat;
  background-size:100% 100%;
  .container-box {
    height: 100%;
    background: url('../assets/img/路线图外框.gif') no-repeat;
    background-size :100%;
    .header {
      // display: flex
      // align-items: center;
      // flex-direction: column;
      height: 24vw;
      text-align: center;

      .logo {
        margin-top: 2.083vh;
        width: 66vw;
      }
    }

    .main {
      height: 86.198vh;

      .nav-container {
        height: 61.2vh;

        .reback-title-box {
          height: 5vh;
          position: relative;

          .rebackImg {
            display: block;
            width: 9.722vw;
            height: 5.52vh;
            position: absolute;
            left: 4.074vw;
            top: -0.78vh;
            background-color: #01132A;
          }

          .titleImg {
            display: block;
            position: absolute;
            width :33.055vw;
            left: 33.6vw;
            top: 3.6vh;
          }

          .title {
            text-align: center;
            font-size: 3.7vw;
            line-height: 5vh;
            color: white;
            padding-top: 0.520vh;
          }
        }

        .navInfoImg {
          height: 80%;

          img {
            margin-left: -5vw;
            margin-top: 15vw;
            width: 110%;
          }
        }
      }

      .qrcode-container {
        height: 25vh;
        position: relative;
        overflow: hidden;
        animation: qrcodeBack 2.5s linear infinite;
        display: flex;
        justify-content: space-around;
        .qrcode-img {
          width: 28.88889vw;
          height: 15.8334vh;
          margin-top: 4.5vh;
          background: url('../assets/img/二维码框.png') no-repeat;
          background-size :100%

          img {
            width: 88%;
            height: 88%;
            margin: 1.04vh 0 0 1.85vw;
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
}
</style>
