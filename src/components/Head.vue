<template>
  <div class="head">
    <div class="head_logo">
      <div class="logo_img">logo</div>
      <div class="logo_icon">
        <div class="lin_icon lin_menu">
          <img src="../assets/image/nav-menu.png" alt="">
        </div>
        <div class="lin_icon lin_face">
          <img src="../assets/image/facebook.png" alt="">
        </div>
        <div class="lin_icon lin_twtter">
          <img src="../assets/image/nav-twtter.png" alt="">
        </div>
      </div>
    </div>
    <div class="head_menu">
      <div class="menu_list" style="margin-right: 48px;">
        <span style="margin-right: 10px;">Pte Practice</span>
        <img style="width: 10px;height: 6px;" src="../assets/image/downIcon.png" alt="">
      </div>
      <div class="menu_list" style="margin-right: 48px;">Prediction</div>
      <div class="menu_list" style="margin-right: 48px;">Circle</div>
      <div class="menu_list">MP3</div>
    </div>
    <div class="head_user">
      <div class="vip">
        <div class="vip_icon">
          <img src="../assets/image/vipicon.png" alt="">
        </div>
        <div class="vip_text">VIP1</div>
      </div>
      <div class="head_bell">
        <img src="../assets/image/rell.png" alt="">
      </div>
      <div class="head_avatar"></div>
      <div style="color: #222941">AMY</div>
      <div class="down_icon">
        <img src="../assets/image/downIcon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
  .head{
    // position: fixed;
    // top: 0;
    // left: 0;
    margin-bottom: 15px;
    width: 100%;
    min-width: 1300px;
    background: #fff;
    box-shadow:0px 1px 4px 0px rgba(250,250,250,0.37);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    .head_logo{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .logo_img{
        margin-right: 168px;
      }
      .logo_icon{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .lin_icon{
          width: 16px;
          height: 13px;
          margin-right: 20px;
          img{
            width: 100%;
            height: 100%;
            margin-right: 20px;
          }
        }
        .lin_menu{
          width: 16px;
          height: 13px;
        }
        .lin_face{
          width: 21px;
          height: 21px;
          background: #3A5998;
        }
        .lin_twtter{
          width: 22px;
          height: 18px;
        }
      }
    }
    .head_menu{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .menu_list{
        color: #222941;
        font-weight: bold;
      }
    }
    .head_user{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .vip{
        height:30px;
        background:rgba(255,240,151,1);
        border-radius:15px;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        .vip_icon{
          width: 22px;
          height: 20px;
          img{
            width: 100%;
            height: 100%;
            float: left;
          }
        }
        .vip_text{
          color: #FF5A00;
          font-size: 14px;
          letter-spacing: 1px;
          font-weight: 900;
          margin-left: 5px;
          line-height: 20px;
        }
      }
      .head_bell{
        width: 18px;
        height: 23px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .head_avatar{
        width: 36px;
        height: 36px;
        background: #ccc;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 10px 0 15px; 
        img{
          width: 100%;
          height: 100%;
        }
      }
      .down_icon{
        width: 10px;
        height: 6px;
        margin-left: 10px;
        img{
          width: 100%;
          height: 100%;
          float: left;
        }
      }
    }
  }
</style>
