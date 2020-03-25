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
    <p class="des">Every morning, no matter how late he had been up, my father rose at five-thirty, went to his study, wrote for a couple of hours, made us all breakfast, read the paper with my mother, and then went back to work for the rest of the morning. Many years passed before I realized that he did this for a living.</p>
    <div class="btn_box">
      <p class="btn" style="background-color: #33D673">Tested(10)</p>
      <p class="btn" style="background-color: #CCCCCC">Unpracticed</p>
      <p class="btn" style="background-color: #FF5A00">Tested By Me(10)</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item{
  padding: 15px 20px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    .left{
      display: flex;
      .name{
        font-size:11px;
        font-weight:bold;
        color:rgba(34,41,65,1);
        padding-right: 12px;
      }
      .tag{
        display: inline-block;
        padding: 0 4px;
        height: 20px;
        margin-right: 10px;
        color: #ffffff;
        font-size: 9px;
        border-radius: 3px;
        line-height: 20px;
      }
    }
    .right{
      display: flex;
      .color{
        width:56px;
        height:20px;
        background:rgba(77,208,225,1);
        border-radius:3px;
        font-size:9px;
        color:rgba(255,255,255,1);
        margin-right: 10px;
        line-height: 20px;
        text-align: center;
      }
      .img{
        width:14px;
        height:20px;
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
  .btn_box{
    display: flex;
    flex-direction: row-reverse;
    .btn{
      height: 25px;
      padding: 0 12px;
      color: #ffffff;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border-radius: 3px;
    }
    .btn:nth-of-type(1){
      margin-right: 0;
    }
  }
}
</style>