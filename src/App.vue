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
<style lang="stylus">
html, body {
  height: 100%;
  margin: 0;
  overflow-x: auto;
}

#app {
  font-family: 'pingfang SC', 'helvetica neue', arial, 'hiragino sans gb', 'microsoft yahei ui', 'microsoft yahei', simsun, sans-serif;
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
  width:100vw;
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
  background: url('./assets/img/弹窗.png') no-repeat;
  background-size:100%

  .overtime-header {
    height: 6.302vh;
    display: flex;
    justify-content: center;

    img {
      width:19.26vw;
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
      font-family: '黑体';
      line-height: 4.629vw;

      span {
        font-size: 4.4444vw;
        color: #01fffc;
        margin-right: .926vw;
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
      background: url('./assets/img/弹窗按钮.png') no-repeat;
      background-size:100%;
      font-size: 2.962vw;
      color: #FFFFFF;
      text-align: center;
      line-height: 7.407vw;
    }
  }
}
</style>
