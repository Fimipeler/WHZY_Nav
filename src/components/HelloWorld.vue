<template>
  <div class="inDex">
    <header class="header">
      <a href="/" class="logo-left">
        <img :src="logo" alt="黄陂区人民法院" />
      </a>
    </header>
    <main class="main">
      <div class="content">
        <canvas id="canv" style="position: absolute; z-index: -1;"></canvas>
        <div class="baseBox">
          <div class="video-box">
            <video id="video" autoplay></video>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">©&nbsp;百智诚远</footer>
    <Modal
      v-model="showModal"
      width="90%"
      :mask-closable="false"
      footer-hide
      class-name="vertical-center-modal"
      :closable="false"
    >
      <div class="login-container">
        <article class="date-right">
          <div class="user_warp">
            <img :src="user.img" alt="" />
          </div>
          <p>{{ user.name }}</p>
        </article>
        <div class="overtime-tip">
          <p>您好，查询到您名下待办任务</p>
        </div>
        <div class="login-content">
          <div class="left">
            <div class="title"><span>（2018）鄂0112民初3155号</span></div>
            <div class="time">
              <span>开庭时间</span>
              <i></i>
              <span> 2019年9月6日 14:00</span>
            </div>
          </div>
          <div class="right">
            <span>第十三法庭</span>
          </div>
        </div>
        <div class="sure-cancel">
          <div class="modalbtn left" @click="toIndex()">取消</div>
          <div class="modalbtn right" @click="toDetail('第十三法庭')">
            立即前往
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      GetBase: "",
      showModal: false,
      user: this.$store.state.user
    };
  },
  mounted() {
    // 开启摄像头
    this.openNavgate();
    this.Upimg();
    // this.login();
  },
  methods: {
    // 跳转主页
    toIndex() {
      this.$router.push("/index");
    },
    toDetail(item) {
      this.$router.push(`/detail/${item}`);
    },
    // 开启摄像头
    openNavgate() {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      getUserMedia.call(
        navigator,
        {
          video: {
            width: 720,
            height: 720
          },
          audio: false
        },
        function(localMediaStream) {
          var video = document.getElementById("video");
          video.srcObject = localMediaStream;
          video.onloadedmetadata = function(e) {
            // console.log("Label: " + localMediaStream.id);
            // console.log("AudioTracks", localMediaStream.getAudioTracks());
            // console.log("VideoTracks ", localMediaStream.getVideoTracks());
          };
        },
        function(e) {
          console.log("Reeeejected!", e);
        }
      );
    },
    // 人脸识别并上传Base64
    Upimg() {
      const ip = "29500x27y9.picp.vip";
      // 请求人脸接口
      this.GetBase = setInterval(GetBase64, 3000); // 每3s请求一次
      var statue = false;
      let _this = this;
      var ArrayBase64 = []; // 人脸获取集合
      async function GetBase64() {
        var canvas = document.createElement("canvas"); // 创建canvas元素
        var video = document.getElementById("video"); // 获取video元素
        var width = video.videoWidth; // 确保canvas的尺寸与图片一样
        var height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(video, 0, 0, width, height); // 将图片绘制到canvas中
        var base64 = await canvas.toDataURL("image/jpeg");
        var param = base64.split(",")[1];
        // console.log(param);
        var newBase64 = "data:image/png;base64," + param;
        // console.log(newBase64, 'newBase64');

        ArrayBase64.push(newBase64);
        // console.log(ArrayBase64,'ArrayBase64')
        let imgBase64 = ArrayBase64.pop();
        // console.log(imgBase64, "imgBase64");
        if (!statue) {
          statue = true;
          await _this.$axios
            .post("http://" + ip + "/api/Face/Testing/Base64", {
              Base64: imgBase64
            })
            .then(res => {
              if (res.data.status === true) {
                console.log(res.data.msg);
                _this.$axios
                  .post("http://" + ip + "/api/Face/Comparison/Base64", {
                    Base64: imgBase64
                  })
                  .then(res => {
                    if (res.data.status === true) {
                      // console.log(res);
                      _this.showModal = true;
                      _this.$store.state.user.img = imgBase64;
                      _this.$store.state.user.name = res.data.result.UserName;
                      // clearInterval(_this.GetBase);
                      console.log("登录成功!");
                      // 登录
                      _this.login();
                    } else {
                      console.log(res.data.msg);
                    }
                  })
                  .catch(error => {
                    console.log("匹配请求失败", error);
                    return false;
                  });
              } else {
                console.log(res.data.msg);
              }
            })
            .catch(error => {
              console.log("识别请求失败", error);
              // _this.showModal = true;
              return false;
            });
          statue = false;
        }
      }
    },
    // 登录
    login() {
      let _this = this;
      _this.$axios
        .post("/client/login", {
          fydm: "1234",
          loginStatus: "0",
          tackName: "导航与导诉",
          tackNum: "01",
          userIdCard: "421302199910015578"
        })
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            console.log(res.data.data.token);
            window.localStorage.setItem("token", res.data.data.token);
          }
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
  },
  watch: {
    showModal(val) {
      // 监听 增加登录成功超过10秒无操作关闭弹框并开启人脸识别
      if (val === true) {
        setTimeout(() => {
          this.showModal = false;
        }, 10000);
      }
    }
  },
  destroyed() {
    clearInterval(this.GetBase);
    // window.localStorage.removeItem("token");
  }
};
</script>
<style lang="less">
.inDex {
  width: 100vw;
  height: 100vh;
  background: url("../assets/img/background_img.png") no-repeat;
  background-size: 100% 100%;
  .header {
    position: relative;
    font-family: "SourceHanSansCN-Regular";
    height: 19vh;
    text-align: center;
    .logo-left {
      img {
        width: 62.1vw;
        margin-top: 4vw;
      }
    }
  }
  .main {
    height: 78vh;
    .content {
      width: 87vw;
      height: 132vw;
      margin: 0 auto;
      padding: 4.3vw 5.5vw;
      background: url("../assets/images/00镜子框.png");
      background-size: 100% 100%;
    }
    .video-box {
      width: 76vw;
      height: 122.8vw;
      overflow: hidden;
    }
    #video {
      width: 122.8vw;
      height: 122.8vw;
      margin-left: 50%;
      transform: translateX(-50%);
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
</style>
