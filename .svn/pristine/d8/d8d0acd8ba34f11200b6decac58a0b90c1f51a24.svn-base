<template>
  <div class="component-head">
    <header>
      <a class="logo-left">
        <img :src="logo" alt="黄陂区人民法院" />
      </a>
      <article class="date-right" @click="modalTrack = !modalTrack">
        <div class="user_warp">
          <img :src="user.img" alt="" />
        </div>
        <p>{{ user.name }}</p>
      </article>
    </header>
    <Modal
      v-model="modalTrack"
      width="90%"
      footer-hide
      class-name="vertical-center-modal"
      :closable="false"
      :mask-closable="true"
    >
      <div class="track-container">
        <article class="date-right">
          <div class="user_warp">
            <img :src="user.img" alt="" @click="modalTrack = !modalTrack" />
          </div>
          <p>{{ user.name }}</p>
        </article>
        <div class="overtime-tip">
          <p>您好，查询到您名下路径信息</p>
        </div>
        <div class="track-content">
          <div class="right record">
            <div class="container">
              <div class="input" v-for="(item, index) in 30" :key="index">
                <span>2020-01-06 15:30</span>
                <i></i>
                <span>武汉市中级人民法院</span>
                <i></i>
                <span>材料收转终端</span>
              </div>
            </div>
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
      user: this.$store.state.user,
      modalTrack: false
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.component-head {
  header {
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

    .date-right {
      position: absolute;
      top: 15vw;
      right: 3vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 12vw;
      .user_warp {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 8vw;
        height: 8vw;
        background-image: url("../../assets/images/12头像框.png");
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
        font-size: 2vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0vw;
        color: #ffffff;
      }
    }
  }
}
</style>
