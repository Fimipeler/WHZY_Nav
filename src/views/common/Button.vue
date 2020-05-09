<template>
  <div class="room-list-btn" @click="goDetailPage">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ['name',"id"],
  data () {
    return {}
  },
  methods: {
    goDetailPage () {
      this.$router.push(
        {
          name: 'detail',
          params: {
            name: this.name,
            id:this.id
          }
        }
      )
      // console.log(this.name,this.id)
    }
  }
}
</script>

<style lang="stylus">
.room-list-btn {
  width: 20.74vw;
  background: url('../../assets/img/room-btn.gif') no-repeat;
  background-size: 100% 100%;
  font-size: 2.7778vw;
  text-align: center;
  color:rgba(255,255,255,1);
  line-height: 10.926vw;
  white-space: nowrap;
  margin: 0 2.315vw 2.604vh .83334vw;

}
</style>
