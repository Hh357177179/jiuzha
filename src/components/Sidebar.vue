<template>
  <div class="sidebar">
    <div class="sidebar_list" @click="clickNav('/home')">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/home.png" alt="">
      </div>
      <div class="sider_title">Home</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/pte.png" alt="">
      </div>
      <div class="sider_title">PTE Guide</div>
    </div>
    <div class="sidebar_list" @click="clickNav('/question')">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/prediction.png" alt="">
      </div>
      <div class="sider_title">PTE Exam Questions</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/exercise.png" alt="">
      </div>
      <div class="sider_title">Prediction Practice</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/data.png" alt="">
      </div>
      <div class="sider_title">Data Statistics</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/message.png" alt="">
      </div>
      <div class="sider_title">Notifications</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/pdf.png" alt="">
      </div>
      <div class="sider_title">Export PDF</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/high.png" alt="">
      </div>
      <div class="sider_title">Frequent Words </div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/circle.png" alt="">
      </div>
      <div class="sider_title">Community</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/us.png" alt="">
      </div>
      <div class="sider_title">About Us</div>
    </div>
    <div class="sidebar_list" @click="clickNav">
      <div class="sider_icon">
        <img src="../assets/image/sidebar/share.png" alt="">
      </div>
      <div class="sider_title">Share</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickNav(route) {
      if (route) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style lang="less">
  .sidebar{
    // position: fixed;
    // z-index: 11;
    // left: 0;
    // top: 95px;
    margin-left: 16px;
    width: 100%;
    background: #fff;
    color: #222941;
    font-weight: bold;
    border-radius: 4px;
    .sidebar_list{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      padding: 18px 0;
      .sider_icon{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-left: 15px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .sider_title{
        color: #222941;
        font-weight: bold;
      }
    }
  }
</style>
