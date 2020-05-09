<template>
  <div class="component-head">
    <header>
      <a href="/" class="logo-left">
        <img :src="logo" alt="黄陂区人民法院" />
      </a>
      <article class="date-right">
        <div class="user_warp">
          <img :src="user.img" alt="" />
        </div>
        <p>{{ user.name }}</p>
      </article>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      user: {
        img: require("@/assets/images/00人脸识别框.png"),
        name: "黄晓丽"
      }
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
        font-family: "SourceHanSansSC-Regular";
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
