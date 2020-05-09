<template>
  <div class="index">
    <header class="header">
      <Head></Head>
    </header>
    <main class="main">
      <article>
        <div class="floorNumWarp">
          <div
            :class="activeNum === index ? 'floor light' : 'floor'"
            v-for="(item, index) in floorList"
            :key="index"
            @click="changeNum(index)"
          >
            {{ item.floorNum }}F（{{ item.floorName }}）
          </div>
        </div>
      </article>
      <section>
        <div class="floorContainer">
          <roomBtn
            class="guessBottomBtn"
            v-for="(item, index) in guessRoomList"
            :key="index"
            :name="item.name"
            :id="item.id"
          ></roomBtn>
        </div>
      </section>
      <footer></footer>
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
      guessRoomList: [],
      // 楼层No
      floorList: [
        {
          id: 1,
          floorNum: 1,
          floorName: "一层"
        },
        {
          id: 2,
          floorNum: 2,
          floorName: "二层"
        },
        {
          id: 3,
          floorNum: 3,
          floorName: "三层"
        },
        {
          id: 4,
          floorNum: 4,
          floorName: "四层"
        },
        {
          id: 5,
          floorNum: 5,
          floorName: "五层"
        }
      ],
      // 超时弹框model
      modal1: false,
      // 超时提醒定时器
      modalInterval: null,
      // 超时提醒倒计时
      countDownTime: 10,
      // tabs标签页
      activeNum: 1
    };
  },
  created() {},
  mounted() {
    this.getFloorInformation();
    // 超时弹框
    this.modalShow();
  },
  methods: {
    // 切换楼层
    changeNum(index) {
      this.activeNum = index;
      console.log(this.activeNum);
    },
    // 获取楼层信息
    getFloorInformation() {
      let random = Math.ceil(Math.random() * 4);
      // console.log(random);
      this.guessRoomList = [];
      this.$store.state.guessRoomList.forEach(items => {
        if (items.floorNum === random) {
          this.guessRoomList = items.floorList;
        }
      });
      this.guessRoomList = this.guessRoomList.slice(0, 8);
      console.log(this.guessRoomList);
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
    height: 78vh;
    overflow-x: scroll;
    article {
      overflow-x: scroll;
      .floorNumWarp {
        display: flex;
        width: fit-content;
        border-bottom: 1px solid #ffffff;
        background-color: rgba(30, 98, 152, 0.3);
        .floor {
          min-width: 23vw;
          text-align: center;
          height: 11vw;
          font-family: "SourceHanSansCN-Regular";
          font-size: 3vw;
          line-height: 11vw;
          letter-spacing: 0vw;
          border-bottom: 1px solid rgba(61, 161, 211, 1);
          color: rgba(255, 255, 255, 1);
        }
        .light {
          border-bottom: 4px solid rgba(21, 180, 239, 1);
          color: rgba(21, 180, 239, 1);
        }
      }
    }
    section {
      .floorContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .guessBottomBtn {
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
