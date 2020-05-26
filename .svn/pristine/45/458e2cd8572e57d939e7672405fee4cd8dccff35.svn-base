<template>
  <div class="index">
    <header class="header">
      <Head></Head>
    </header>
    <main class="main">
      <i class="toIndex" @click="toIndex()"></i>
      <article>
        <div class="floorNumWarp">
          <div
            :class="
              activeNum === index
                ? 'floor light linerColor'
                : 'floor linerColor'
            "
            v-for="(item, index) in guessRoomList"
            :key="index"
            @click="changeNum(index)"
          >
            {{ item.floorNum }}F（{{ item.floorName }}）
          </div>
        </div>
      </article>
      <section>
        <div
          class="floorContainer"
          :style="{
            width:
              guessRoomList[activeNum].floorList.length > 12
                ? Math.ceil(floorWarpWidth) * 25 + 'vw'
                : 'auto'
          }"
        >
          <roomBtn
            class="guessBottomBtn"
            v-for="(item, index) in guessRoomList[activeNum].floorList"
            :key="index"
            :name="item.name"
            :id="item.id"
            :floorNum="activeNum + 1"
          ></roomBtn>
        </div>
      </section>
      <footer>
        <div class="navNum">
          <span class="linerColor">{{ activeNum + 1 }}F</span>
        </div>
        <div class="navImgWarp">
          <img :src="guessRoomList[activeNum].url" alt="" />
        </div>
      </footer>
    </main>
    <footer class="footer">©&nbsp;百智诚远</footer>
    <Modal
      v-model="modal1"
      width="90%"
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
import roomBtn from "@/views/common/Button";
import Head from "@/views/common/head";
export default {
  components: {
    roomBtn,
    Head
  },
  data() {
    return {
      guessRoomList: this.$store.state.guessRoomList,
      // 楼层No
      floorList: [],
      // 超时弹框model
      modal1: false,
      // 超时提醒定时器
      modalInterval: null,
      // 超时提醒倒计时
      countDownTime: 10,
      // tabs标签页
      activeNum: 0,
      floorWarpWidth: 5
    };
  },
  created() {
    // this.getFloorInformation();
  },
  mounted() {
    // 超时弹框
    this.modalShow();
  },
  methods: {
    // 切换楼层
    changeNum(index) {
      this.activeNum = index;
      // console.log(this.activeNum);
      // this.floorWarpWidth =
      // this.guessRoomList[this.activeNum].floorList.length / 3;
      // console.log(this.floorWarpWidth);
      // this.getFloorInformation();
    },
    // 获取楼层信息
    getFloorInformation() {
      // let random = Math.ceil(Math.random() * 4);
      // console.log(floorContainerWidth.style);
      // this.guessRoomList = [];
      // this.$store.state.guessRoomList.forEach(items => {
      //   this.floorList.push(items);
      //   // console.log(this.floorList);
      //   if (items.floorNum === this.activeNum + 1) {
      //     this.guessRoomList = items.floorList;
      //   }
      // });
    },

    // 点击楼层图片跳转至对应的楼层详情页面
    gotoFloorPage(item) {
      this.$router.push({
        name: "floorpage",
        params: {
          name: item.floorName,
          num: item.floorNum,
          floorId: item.floorId
        }
      });
    },

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
    }
  },
  // 页面关闭 清楚定时器
  destroyed() {
    clearInterval(this.modalInterval);
  }
};
</script>

<style lang="less">
.index {
  min-height: 100vh;
  background: url("../assets/images/background_img.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .header {
    height: 19vh;
    text-align: center;
  }
  .main {
    position: relative;
    height: 78vh;
    .toIndex {
      position: absolute;
      right: 0;
      top: 2.5vw;
      width: 6vw;
      height: 6vw;
      background: url("../assets/images/toIndex.png") no-repeat;
      background-size: 6vw 6vw;
    }
    article {
      overflow-x: scroll;
      .floorNumWarp {
        display: flex;
        width: fit-content;
        border-bottom: 1px solid rgba(61, 161, 211, 5);
        background-color: rgba(30, 98, 152, 0.3);

        .floor {
          min-width: 22vw;
          text-align: center;
          height: 11vw;
          font-family: "SourceHanSansCN-Regular";
          font-size: 3vw;
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
        .light {
          border-bottom: 3px solid rgba(21, 180, 239, 1);
          // color: #2ce6ef;
          background: linear-gradient(
            to bottom,
            rgb(72, 162, 248),
            rgb(44, 230, 239)
          );
          background-clip: text;
          color: transparent;
        }
      }
    }
    section {
      overflow-x: scroll;
      background: url("../assets/images/12箭头.png") no-repeat right center;
      background-size: 7vw 6vw;
      background-color: rgba(30, 98, 152, 0.3);
      .floorContainer {
        display: flex;
        width: fit-content;
        max-height: 39vw;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding: 6vw 2vw;
        .guessBottomBtn {
          margin: 1.5vw;
        }
      }
    }
    footer {
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
        margin-top: 2vw;
        text-align: center;
        img {
          width: 90vw;
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
}
::-webkit-scrollbar {
  display: none;
}
</style>
