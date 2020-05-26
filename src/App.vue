<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  // created () {
  //   if (this.$router.path !== '/') {
  //     this.$router.replace('/')
  //   }
  // }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  overflow-x: auto;
  font-family: "SourceHanSansSC-Regular" !important;
}

#app {
  font-family: "SourceHanSanSC-Regular" !important;
  width: 100vw;
  height: 100vh;
}

.ivu-modal-mask {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  .ivu-modal {
    top: 0;
  }
}

.ivu-modal-wrap {
  width: 100vw;
}

.ivu-modal-content {
  background-color: transparent !important;
}

.ivu-modal-body {
  padding: 0 !important;
  display: flex;
  justify-content: space-around;
}

.modal-container {
  width: 72.68vw;
  height: 24.1666vh;
  background: url("./assets/img/弹窗.png") no-repeat;
  background-size: 100% 100%;
  .overtime-header {
    height: 6.302vh;
    display: flex;
    justify-content: center;

    img {
      width: 19.26vw;
      display: block;
      margin-top: 1.5625vh;
    }
  }

  .overtime-tip {
    height: 17vw;
    padding-top: 2.083vh;

    p {
      text-align: center;
      color: #fff;
      font-size: 2.7777vw;
      // font-family: 'SourceHanSansCN-Regular';
      line-height: 4.629vw;

      span {
        font-size: 4.4444vw;
        color: #01fffc;
        margin-right: 0.926vw;
      }
    }
  }

  .sure-cancel {
    display: flex;
    justify-content: space-around;
    width: 63.8889vw;
    height: 7.604vh;
    margin: 0 auto;
    padding: 0 3.24vw;

    .modalbtn {
      width: 25vw;
      height: 4.1667vh;
      background: url("./assets/img/弹窗按钮.png") no-repeat;
      background-size: 100%;
      font-size: 2.962vw;
      color: #ffffff;
      text-align: center;
      line-height: 7.407vw;
    }
  }
}
.login-container {
  width: 81vw;
  height: 65vw;
  background: url("./assets/images/10弹窗框.png") no-repeat;
  background-size: 100% 100%;
  .date-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 12vw;
    margin: 5vw auto 0;
    .user_warp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 12vw;
      height: 12vw;
      background-image: url("./assets/images/12头像框.png");
      background-size: 100% 100%;
      text-align: center;
      vertical-align: middle;
      img {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        background-color: #fff;
      }
    }
    p {
      // font-family: "SourceHanSansCN-Regular";
      font-size: 4vw;
      font-weight: normal;
      font-stretch: normal;
      line-height: 6vw;
      letter-spacing: 0vw;
      color: rgba(255, 245, 81, 1);
    }
  }
  .overtime-tip {
    p {
      text-align: center;
      // font-family: "SourceHanSansCN-Regular";
      font-size: 2.5vw;
      font-weight: normal;
      line-height: 6vw;
      letter-spacing: 0vw;
      color: rgba(255, 255, 255, 1);

      span {
        font-size: 4.4444vw;
        color: #01fffc;
        margin-right: 0.926vw;
      }
    }
  }
  .login-content {
    height: 16vw;
    width: 76vw;
    padding: 0 3vw;
    margin: 3vw auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(104, 160, 242, 0.2);
    .left {
      .title {
        padding-left: 8vw;
        height: 7.5vw;
        background: url("./assets/images/civil.png") no-repeat left center;
        background-size: 8vw 4vw;
        font-size: 2.5vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 7.5vw;
        letter-spacing: 0vw;
        color: rgba(1, 255, 252, 1);
      }
      .time {
        font-size: 2.5vw;
        font-weight: normal;
        font-stretch: normal;
        line-height: 6vw;
        letter-spacing: 0vw;
        color: rgba(255, 255, 255, 1);
        i {
          margin: 0 1vw;
        }
      }
    }
    .right {
      font-size: 3vw;
      font-weight: normal;
      font-stretch: normal;
      line-height: 4vw;
      letter-spacing: 0vw;
      color: rgba(255, 255, 255, 1);
    }
  }
  .sure-cancel {
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      background: url("./assets/images/10左按钮.png") no-repeat center;
      margin-right: -3vw;
    }
    .right {
      background: url("./assets/images/10右按钮.png") no-repeat center;
    }
    .modalbtn {
      width: 38vw;
      height: 8vw;
      font-size: 3vw;
      font-weight: normal;
      font-stretch: normal;
      line-height: 8vw;
      letter-spacing: 0vw;
      text-align: center;
      color: #ffffff;
      background-size: 100% 100%;
    }
  }
}
.track-container {
  width: 81vw;
  height: 135vw;
  background: url("./assets/images/14背景框.png") no-repeat;
  background-size: 100% 100%;
  .date-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 12vw;
    margin: 5vw auto 0;
    .user_warp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 12vw;
      height: 12vw;
      background-image: url("./assets/images/12头像框.png");
      background-size: 100% 100%;
      text-align: center;
      vertical-align: middle;
      img {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        background-color: #fff;
      }
    }
    p {
      font-family: "SourceHanSansCN-Regular";
      font-size: 4vw;
      font-weight: normal;
      font-stretch: normal;
      line-height: 6vw;
      letter-spacing: 0vw;
      color: rgba(255, 245, 81, 1);
    }
  }
  .overtime-tip {
    p {
      text-align: center;
      // font-family: "SourceHanSansCN-Regular";
      font-size: 2.5vw;
      font-weight: normal;
      line-height: 6vw;
      letter-spacing: 0vw;
      color: rgba(255, 255, 255, 1);

      span {
        font-size: 4.4444vw;
        color: #01fffc;
        margin-right: 0.926vw;
      }
    }
  }
  .track-content {
    .record {
      display: flex;
      width: 80vw;
      height: 106vw;
      background-color: rgba(40, 183, 243, 0.12);
      overflow: scroll;
      .container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        justify-content: flex-start;
        align-content: flex-start;
        margin: 4vw 0 0 4vw;
        padding: 1vw 0;
        justify-content: flex-start;
        background: url("./assets/images/路径15.png") left;
        background-repeat: repeat-y;
        background-size: 15.65vw auto;
        background-position-y: -6.5vw;
        overflow: hidden;
        .shade {
          // left: 1vw;
          width: 5vw;
          background-color: rgba(8, 46, 84, 1);
        }
        .topShade {
          position: absolute;
          top: 0;
          width: 2vw;
          left: 2.35vw;
          height: 2.4vw;
        }
        .bottomShade {
          position: absolute;
          bottom: 0;
          left: 4vw;
          width: 3.14vw;
          height: 3.5vw;
        }
        .input {
          height: 6vw;
          width: 56vw;
          margin-bottom: 5.63vw;
          background-color: transparent;
          text-align: center;
          margin-left: 11vw;
          background-image: url("./assets/images/30文字框右.png");
          background-size: 100% 100%;
          font-family: "SourceHanSansCN-Regular";
          font-size: 2vw;
          font-weight: 300;
          font-stretch: normal;
          line-height: 6vw;
          letter-spacing: 0vw;
          color: rgba(255, 255, 255, 1);
          i {
            margin: 0 1vw;
          }
        }
        .input:nth-child(2n) {
          margin-left: 15vw;
        }
        .input:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
