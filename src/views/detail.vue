<template>
  <div class="detail">
    <header class="header">
      <Head></Head>
    </header>
    <main class="main">
      <section>
        <div class="title">
          <span>
            {{ roomName }}
          </span>
          <img :src="rebackImg" alt="" @click="reback" />
        </div>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
          @ended="onPlayerEnded($event)"
        ></video-player>
      </section>
      <article>
        <div class="navNum">
          <span>{{ roomNum }}F</span>
        </div>
        <div class="navImgWarp">
          <img
            :src="roomUrl[roomId]"
            alt=""
            :style="{ width: changeImgNum + 'vw' }"
          />
        </div>
        <div class="changeInfo">
          <div class="direction">
            <img src="../assets/images/13方位.png" alt="" />
          </div>
          <div class="changeImg">
            <button class="big" @click="changeImg('+')"></button>
            <span>{{ changeImgNum + 10 }}%</span>
            <button class="small" @click="changeImg('-')">小</button>
          </div>
        </div>
      </article>
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
</template>

<script>
import Head from "@/views/common/head";
export default {
  components: {
    Head
  },
  data() {
    return {
      // 超时提醒倒计时
      countDownTime: 10,
      // 法院功能室列表
      guessRoomList: this.$store.state.guessRoomList,
      rebackImg: require("@/assets/images/13首页icon.png"),
      // 上级路由传值点击btn的信息（name,id）
      roomNum: 1,
      roomName: "",
      roomId: 0,
      roomUrl: [],
      roomVideo: [],
      // 超时弹框
      modal1: false,
      // video options
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "1760:880", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            // src: this.$store.state.video // url地址  http://vjs.zencdn.net/v/oceans.mp4
            // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            src: ""
          }
        ],
        poster: "../../static/images/test.jpg", // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      changeImgNum: 90
    };
  },
  created() {
    // this.getParams();
  },
  mounted() {
    this.getParams();
    this.modalShow();
    // console.log(this.$route.params.name);
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
          // 当倒计时小于0时清除定时器
          this.$router.push({ path: "/" });
        }
      }, 1000);
    },
    // 添加定时器监听用户操作--如果一分钟不操作，弹出modal
    modalShow() {
      if (this.modal1 === false) {
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
    // 获取路由信息
    getParams() {
      this.roomName = this.$route.params.name;
      this.guessRoomList.forEach(element => {
        element.floorList.forEach(item => {
          if (item["name"] === this.$route.params.name) {
            // console.log(item["url"]);
            this.roomUrl = item["url"];
            this.roomVideo = item["video"];
            this.playerOptions["sources"][0]["src"] = this.roomVideo[this.roomId];
            this.roomNum = element.floorNum;
          }
        });
      });
    },
    // 视频播放回调
    onPlayerPlay(player) {
      console.log("player play!", player);
      // const myPlayer = this.$refs.videoPlayer.player;
      // myPlayer.src("http://vjs.zencdn.net/v/oceans.mp4");
      // myPlayer.play();
    },
    // 视频播完回调
    onPlayerEnded(player) {
      console.log("player ended!");
      const myPlayer = this.$refs.videoPlayer.player;
      if (this.roomVideo.length > 1) {
        if (this.roomId + 1 >= this.roomVideo.length) {
          this.roomId = 0;
          myPlayer.src(this.roomVideo[this.roomId]);
          myPlayer.play();
        } else {
          this.roomId += 1;
          myPlayer.src(this.roomVideo[this.roomId]);
          myPlayer.play();
          console.log(this.roomVideo[this.roomId], this.roomId);
        }
      } else {
        myPlayer.src(this.roomVideo[this.roomId]);
        myPlayer.play();
      }
      // 初始化图片大小
      this.changeImgNum = 90;
    },
    // 改变图片大小
    changeImg(about) {
      if (about === "+") {
        this.changeImgNum = this.changeImgNum + 90 * 0.1;
      } else {
        if (this.changeImgNum >= 100) {
          this.changeImgNum = this.changeImgNum - 90 * 0.1;
        }
      }
    }
  },
  destroyed() {
    clearInterval(this.modalInterval);
  }
};
</script>

<style lang="less" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  background: url("../assets/img/background_img.png") no-repeat;
  background-size: 100% 100%;
  .header {
    height: 19vh;
    text-align: center;
  }
  .main {
    height: 78vh;
    position: relative;
    section {
      .title {
        text-align: center;
        position: relative;
        height: 11vw;
        background-color: rgba(30, 98, 152, 0.3);
        span {
          font-family: "SourceHanSansCN-Regular";
          font-size: 3vw;
          font-weight: normal;
          font-stretch: normal;
          line-height: 11vw;
          letter-spacing: 0vw;
          background: linear-gradient(
            to bottom,
            rgb(255, 255, 255),
            rgb(62, 158, 229)
          );
          background-clip: text;
          color: transparent;
        }
        img {
          position: absolute;
          right: 4vw;
          top: 50%;
          transform: translateY(-50%);
          width: 4vw;
          height: 4vw;
          cursor: pointer;
        }
      }
    }
    article {
      .navNum {
        height: 13vw;
        background: url("../assets/images/12分割线.png") no-repeat center 9vw;
        background-size: 82vw 2vw;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        span {
          font-family: "SFProText-Bold";
          font-size: 4vw;
          font-weight: normal;
          font-stretch: normal;
          line-height: 7vw;
          letter-spacing: 0vw;
          background: linear-gradient(
            to bottom,
            rgb(159, 207, 242),
            rgb(62, 158, 229)
          );
          background-clip: text;
          color: transparent;
        }
      }
      .navImgWarp {
        width: 90vw;
        height: 63vw;
        margin: 0 auto;
        margin-top: 2vw;
        text-align: center;
        overflow: scroll;
        img {
          width: 90vw;
        }
      }
      .changeInfo {
        position: absolute;
        right: 3vw;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .direction {
          width: 9vw;
          height: 9vw;
          margin-right: 3vw;
        }
        .changeImg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          button {
            width: 3vw;
            height: 3vw;
            border: none;
            background-color: transparent;
            background-size: 3vw 3vw;
            cursor: pointer;
          }
          span {
            margin: 1vw 0;
          }
          .big {
            background: url("../assets/images/13放大.png") no-repeat;
          }
          .small {
            background: url("../assets/images/13缩小.png") no-repeat;
          }
        }
      }
    }
  }
}
.footer {
  height: 3vh;
  font-size: 2vw;
  line-height: 3vh;
  text-align: center;
  color: white;
}
button:focus {
  outline: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
