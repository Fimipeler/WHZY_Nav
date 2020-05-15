<template>
  <div class="room-list-btn" @click="goDetailPage">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ["name", "id", "floorNum"],
  data() {
    return {};
  },
  methods: {
    goDetailPage() {
      this.$router.push({
        name: "detail",
        params: {
          name: this.name,
          id: this.id,
          floorNum: this.floorNum
        }
      });
    }
  }
};
</script>

<style lang="less">
.room-list-btn {
  width: 21vw;
  height: 6vw;
  font-size: 2.5vw;
  padding: 0 2vw;
  text-align: center;
  line-height: 6vw;
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 188, 250, 0.3);
  border: 1px solid rgba(41, 134, 246, 0.8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
