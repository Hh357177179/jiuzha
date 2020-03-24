<template>
  <div class="foot_main">
    <div class="foot">
      <div class="foot_main">
        <div class="foot_list">
          <p class="foot_list_title">JIUCHA EDUCATION</p>
        </div>
        <div class="foot_list">
          <p class="foot_list_title">Contact Us</p>
          <div class="fl_main">
            <div class="flm_list">Email：pte@pte9.com</div>
            <div class="flm_list">隶属于陕西鹭飞教育科技有限公司</div>
            <div class="flm_img_main">
              <div class="flm_img" v-for="(img, index) in footImg" :key="index" @mouseover="footOver(index)" @mouseout="footOut(index)">
                <img :src="img.url" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="foot_list">
          <p class="foot_list_title">Practice</p>
          <ul class="fl_main">
            <li class="flm_list flm_li">Listening</li>
            <li class="flm_list flm_li">Speaking</li>
            <li class="flm_list flm_li">Reading</li>
            <li class="flm_list flm_li">Writing</li>
          </ul>
        </div>
        <div class="foot_list">
          <p class="foot_list_title">About</p>
          <ul class="fl_main">
            <li class="flm_list flm_li">about us</li>
            <li class="flm_list flm_li">VIP</li>
            <li class="flm_list flm_li">privacy policy</li>
            <li class="flm_list flm_li">article</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot_bar">Copyright © 2019 LuFei Systems Incorporated. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footImg: [
        { icon: 'ffacebook', url: ''},
        { icon: 'ftwitter', url: ''},
        { icon: 'fins', url: ''},
        { icon: 'fyoutobe', url: ''}
      ]
    }
  },
  created () {
    this.footImg.forEach(img => {
      img.url = require(`../assets/image/foot/${img.icon}.png`)
    });
  },
  methods: {
    footOver (i) {
      this.footImg[i].url = require(`../assets/image/foot/${this.footImg[i].icon}-on.png`)
    },
    footOut (i) {
      let img = 
      this.footImg[i].url = require(`../assets/image/foot/${this.footImg[i].icon}.png`)
    }
  }
}
</script>


<style lang="less">
  .foot{
    width: 100%;
    background: #092327;
    margin-top: 100px;
    .foot_main{
      width: 1000px;
      margin: 0 auto;
      padding: 53px 0 85px 0;
      display: flex;
      justify-content: space-between;
      .foot_list_title{
        color: #fff;
        font-weight: bold;
        margin-bottom: 35px;
      }
      .fl_main{
        font-size: 14px;
        color: #A1A4AB;
        font-weight: normal;
        .flm_list{
          margin-bottom: 13px;
        }
        .flm_img_main{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .flm_img{
            width: 26px;
            height: 26px;
            margin-right: 16px;
            cursor: pointer;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .flm_li{
          list-style-type: disc;
          margin-left: 15px;
        }
      }
    }
  }
  .foot_bar{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #051D21;
    color: #424656;
    font-size: 14px;
    text-align: center;
  }

</style>
