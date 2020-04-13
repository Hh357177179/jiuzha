<template>
<div>
  <div class="tag_box">
    <div class="title">1.Language appeared nowhere</div>
    <div class="tag" style="background-color:#536DFE">MCS 1/2033</div>
    <div class="tag" style="background-color:#786BF0">Highly Repeated</div>
    <div class="tag" style="background-color:#FF6666">Latest Update</div>
    <div class="tag" style="background-color:#548CFF">Prediction</div>
    <div class="tag" style="background-color:#4DD0E1;margin-left:100px">23/02/2020</div>
    <div class="tag" style="background-color:#4DD0E1;">#305561</div>
    <div class="tag" style="background-color:#4DD0E1;">Exam Q</div>
    <div class="btn" style="background-color:#FF5A00">Tested By Me(10)</div>
    <div class="btn" style="background-color:#389EFF;width:120px">Notes</div>
  </div>
  <div class="box">
    <div class="title">Practice 1000</div>
    <div style="display:flex">
      <div class="btn" style="background-color: #4DD0E1;">Default Sort</div>
      <div class="btn" style="margin-left:16px;color:#4DD0E1;">latest update</div>
    </div>
  </div>
  <div class="item" v-for="n in 5">
    <div class="des">
      <img class="avatar" src="/src/assets/image/real.png" alt="">
      <div class="time">AMY     14:00 26/05/2020</div>
      <div class="btn">Tested(10)</div>
      <div><img src="" alt="" style="width:23px;height:30px;border:1px solid red">10</div>
      <img src="/" alt="" style="width:22px;height:21px;border:1px solid red">
      <div><img src="" alt="" style="width:23px;height:22px;border:1px solid red">26.3 s</div>
    </div>
    <div class="content">
      <img src="/src/assets/image/" alt="">
      He does not agree that the United States has world domination, except in military matters.
    </div>
  </div>
  <div class="btn_box">
    <div class="btn">Feedback</div>
    <div style="display:flex">
      <div class="btn">Try Again</div>
      <div class="btn">Previous</div>
      <div class="btn">Previous</div>
      <div class="btn">Next</div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.tag_box{
  display: flex;
  padding: 24px 0;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #DFDFDF;
  .title{
    font-size: 18px;
    color: #222941;
    font-weight: bold;
    flex-shrink: 0;
    margin-bottom: 29px;
    margin-right: 5px;
  }
  .tag{
    height:32px;
    background:rgba(83,109,254,1);
    border-radius:4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    padding: 0 6px;
    flex-shrink: 0;
    margin-bottom: 29px;
  }
  .btn{
    flex-shrink: 0;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    color: #fff;
    margin-bottom: 29px;
    margin-right: 16px;
  }
}
.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  .title{
    font-size: 16px;
    color: #222941;
  }
  .btn{
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border:2px solid rgba(77,208,225,1);
    width:144px;
    height:40px;
    border-radius:26px;
    border:2px solid rgba(77,208,225,1);
  }
}
.item{
  border-bottom: 1px solid #DFDFDF;
  margin-top: 24px;
  .des{
    display: flex;
    font-size: 16px;
    color: #222941;
    align-items: center;
    .avatar{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 6px;
    }
    .time{
      // font-size: 16px;
      // color: #222941;
    }
    .btn{
      width:120px;
      height:40px;
      background:rgba(51,214,115,1);
      border-radius:4px;
      color: #FFFFFF;
      font-size: 16px;
      margin-right: 24px;
      margin-left: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .collection {

    }
  }
  .content{
    padding: 22px;
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 4px;
    font-size: 18px;
    color: #222941;
    margin: 24px 0;
  }
}
.btn_box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  .btn{
    width:120px;
    height:40px;
    background:rgba(77,208,225,1);
    border-radius:4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    margin-left: 16px;
  }
}
</style>