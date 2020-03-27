<template>
  <div class="item">
    <div class="left">
      <p>1,Language appeared nowhere</p>
      <p>
        <span class="tag" style="background-color:#786BF0;">Highly Repeated</span>
        <span class="tag" style="background-color:#548CFF;">Prediction</span>
        <span class="tag" style="background-color:#FF6666;">Latest Update</span>
        <span class="tag" style="background-color:#3EB2E3;">Update</span>
        <span class="tag" style="background-color:#FFA966;">Exam Audio</span>
      </p>
    </div>
    <div class="right">
      <div style="margin-bottom:24px">
        <span class="tag1" v-for="(n, index) in tag1" :key="index">{{n}}</span>
        <img src="" alt="">
      </div>
      <div>
        <span class="tag2" v-for="(n, index) in tag2" :key="index">{{n}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag1: ['Exam Q', '23/02/2020', '#305561'],
      tag2: ['Tested(10)', 'Practice(90)', 'Notes']
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  padding: 32px;
  padding-right: 0px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .left{
    display: flex;
    .name{
      font-size:18px;
      font-weight:bold;
      color:rgba(34,41,65,1);
      padding-right: 16px;
    }
    .tag{
      display: inline-block;
      padding: 0 7px;
      height: 32px;
      margin-right: 16px;
      color: #ffffff;
      font-size: 14px;
      border-radius: 4px;
      line-height: 32px;
    }
  }
  .right{
    .tag1{
      display: inline-block;
      height: 32px;
      border-radius: 4px;
      padding: 0 6px;
      color: #ffffff;
      font-size: 14px;
      margin-right: 25px;
      background-color: #4DD0E1;
      line-height: 32px;
      text-align: center;
    }
    .tag2{
      display: inline-block;
      height: 40px;
      padding: 0 20px;
      color:#ffffff;
      background-color: #33D673;
      margin-right: 25px;
      line-height: 40px;
      text-align: center;
      margin-bottom: 25px;
    }
    .tag2:nth-last-of-type(1){
      background-color: #389EFF;
    }
  }
}

</style>