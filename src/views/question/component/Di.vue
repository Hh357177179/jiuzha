<template>
  <div class="item">
    <div class="top">
      <div class="left">
        <h1 class="name">1.Language appeared</h1>
        <p>
          <span class="tag" style="background-color:#786BF0;">Highly Repeated</span>
          <span class="tag" style="background-color:#548CFF;">Prediction</span>
          <span class="tag" style="background-color:#FF6666;">Latest Update</span>
          <span class="tag" style="background-color:#3EB2E3;">Update</span>
          <span class="tag" style="background-color:#FFA966;">Exam Audio</span>
        </p>
      </div>
      <div class="right">
        <p class="color">#305561</p>
        <img class="img" src="" alt="">
      </div>
    </div>
    <!-- <p class="des">Every morning, no matter how late he had been up, my father rose at five-thirty, went to his study, wrote for a couple of hours, made us all breakfast, read the paper with my mother, and then went back to work for the rest of the morning. Many years passed before I realized that he did this for a living.</p> -->
    <div class="bottom">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#222941"
        inactive-text="Answer"
        >
      </el-switch>
      <div class="btn_box">
        <p class="btn" style="background-color: #33D673">Tested(10)</p>
        <p class="btn" style="background-color: #CCCCCC">Unpracticed</p>
        <p class="btn" style="background-color: #FF5A00">Tested By Me(10)</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>

<style scoped>
.el-switch__label{
  font-size: 16px;
}
</style>
<style lang="less" scoped>
.item{
  padding: 30px 35px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    .left{
      display: flex;
      .name{
        font-size:18px;
        font-weight:bold;
        color:rgba(34,41,65,1);
        padding-right: 25px;
      }
      .tag{
        display: inline-block;
        padding: 0 6px;
        height: 32px;
        margin-right: 16px;
        color: #ffffff;
        font-size: 14px;
        border-radius: 4px;
        line-height: 32px;
      }
    }
    .right{
      display: flex;
      .color{
        width:74px;
        height:32px;
        background:rgba(77,208,225,1);
        border-radius:4px;
        font-size:14px;
        color:rgba(255,255,255,1);
        margin-right: 16px;
        line-height: 32px;
        text-align: center;
      }
      .img{
        width:22px;
        height:32px;
      }
    }
  }
  .des{
    font-size:11px;
    color:rgba(34,41,65,1);
    text-align: justify;
    line-height: 17px;
    margin-bottom: 15px;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn_box{
      display: flex;
      // flex-direction: row-reverse;
      .btn{
        height: 40px;
        padding: 0 19px;
        color: #ffffff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        border-radius: 4px;
      }
      // .btn:nth-of-type(1){
      //   margin-right: 0;
      // }
    }
  }
  
}
</style>