<template>
  <div class="me">
    <Head></Head>
    <div class="me_main">
      <!-- <div style="width: 20%;margin-right: 15px;"> -->
      <div style="margin-right: 15px; flex-shrink: 0;">
        <SideBar></SideBar>
      </div>
      <div class="main">
          <div style="padding-right: 10px;">
            <router-view></router-view>
          </div>
      </div>
      <div v-if="isShow" style="width: 20%;margin-right: 15px;">
        <div class="me_right">
          <div class="mr_title">My date</div>
          <div class="mr_list">
            <p class="mrl_title">Log in</p>
            <p class="mrl_desc">10 days</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Practiced</p>
            <p class="mrl_desc">1000 questions</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Total Duration</p>
            <p class="mrl_desc">30.5 hours</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Daily Rankings</p>
            <p class="mrl_desc">10 place</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Monthly Rankings</p>
            <p class="mrl_desc">100 place</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Target Score</p>
            <p class="mrl_desc">90</p>
          </div>
          <div class="mr_list">
            <p class="mrl_title">Test Time</p>
            <p class="mrl_desc">09/10/2020</p>
          </div>
          <div class="mr_list" style="border: none;">
            <p class="mrl_title">Expires Date</p>
            <p class="mrl_desc">06/23/2020</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Foot'
import SideBar from '../../components/Sidebar'
import Head from '../../components/Head'
export default {
  data () {
    return {
      isShow: true
    }
  },
  components: { Head, SideBar, Footer },
  watch: {
    $route(to,from){
      if (to.path == '/home' || to.path == '/statistics' || to.path == '/exportpdf') {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .me{
    width: 100%;
    min-height: 100vh;
    background: #F2F7F8;
    border: 0.1px solid rgba(0,0,0,0);
    .me_main{
      display: flex;
      justify-content: space-between;
    }
    .main{
      width: 100%;
      // height: calc(100vh - 100px);
      margin: 0 15px 0;
      border-radius: 2px;
      .el-scrollbar__wrap {
          overflow-x: hidden;
      }
    }
    .me_right{
      width: 100%;
      background: #fff;
      border-radius: 4px;
      .mr_title{
        color: #222941;
        font-weight: bold;
        line-height: 58px;
        border-bottom: 1px solid #DFDFDF;
        padding-left: 25px;
      }
      .mr_list{
        border-bottom: 1px solid #DFDFDF;
        font-size: 14px;
        padding: 12px 0 10px 25px;
        .mrl_title{
          color: #A1A4AB;
          letter-spacing: 1px;
        }
        .mrl_desc{
          color: #424656;
          margin-top: 5px;
        }
      }
    }
  }
</style>


