<template>
  <div class="box">
    <div class="item">
      <div class="top">
        <img class="cover" src="" alt="">
        <div class="left">
          <h1 class="title">Listening FIB Exam Vocab</h1>
          <p class="number">Familiar 567 / 3234</p>
          <p class="des">90% FIB-L blanks are from this list. Secure your 10 Listening points by memorising the complete list. Students who are weak in Listening must familiarise with all words in this list.</p>
        </div>
      </div>
      <el-progress :percentage="30" :stroke-width="26"></el-progress>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box {
  .item{
    .top{
      display: flex;
      .cover{
        width: 84px;
        height: 104px;
      }
      .left{
        padding-left: 22px;
        .title{
          font-size: 20px;
          color: #222941;
        }
        .number{
          font-size: 16px;
          color: #222941;
          padding: 12px 0;
        }
        .des{
          font-size: 16px;
          color: #A1A4AB;
        }
      }
    }
  }
}
</style>