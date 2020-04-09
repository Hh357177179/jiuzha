<template>
  <div class="content">
    <nav class="top">
      <div v-for="(n, index) in tag1List" :key="index" class="item" @click="navClick(index)" :class="activeIndex == index ? 'active' : ''">{{n}}</div>
      <!-- <div class="item" :class="activeIndex == 1 ? '' : ''">Discussion Group</div>
      <div class="item" :class="activeIndex == 2 ? '' : ''">Practiced Board</div>
      <div class="item" :class="activeIndex == 3 ? '' : ''">My Practices</div> -->
    </nav>
    <div class="tag_box">
      <div class="title">1.Language appeared nowhere</div>
      <div class="tag" style="background-color:#536DFE">FIBW 1/2033</div>
      <div class="tag" style="background-color:#786BF0">Highly Repeated</div>
      <div class="tag" style="background-color:#FF6666">Latest Update</div>
      <div class="tag" style="background-color:#548CFF">Prediction</div>
      <div class="tag" style="background-color:#4DD0E1;margin-left:100px">23/02/2020</div>
      <div class="tag">#305561</div>
      <div class="tag">Exam Q</div>
      <div class="btn" style="background-color:#FF5A00">Tested By Me(10)</div>
      <div class="btn" style="background-color:#389EFF;width:120px">Notes</div>
    </div>
    <div class="content_box">
      <div class="title">
        Every morning, no matter how late he had been up, my father rose at five-thirty.
      </div>
      <div class="content">
        no matter how late he had been up, my father rose at five-thirty, went to his study, wrote for a couple of hours, made us all breakfast, read the paper with my mother, and then went back to work for the rest of the morning. Many years passed before I realized that he did this for a living.Every morning, no matter how late he had been up, my father rose at five-thirty, went to his study, wrote for a couple of hours, made us all breakfast, read the paper with my mother, and then went back to work for the rest of the morning. Many years passed before I realized that he did.time
      </div>
      <div class="progress">
        <div class="active"></div>
        <p class="time">00:36</p>
      </div>
      <div class="btn_box">
        <div class="btn">
          <div class="btn_item">Feedback</div>
          <div class="btn_item">Answer</div>
        </div>
        <div class="btn">
          <div class="btn_item">Try Again</div>
          <div class="btn_item">Previous</div>
          <div class="btn_item">Next</div>
          <div class="btn_item" style="background-color:#CCCCCC;">Save</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tag1List: ['Titles', 'Discussion Group', 'Practiced Board', 'My Practices'],
      activeIndex: ''
    }
  }, 
  methods: {
    navClick(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 24px 32px;
  background-color: #fff;
  .top{
    // height: 88px;
    display: flex;
    border-bottom: 1px solid #DFDFDF;
    padding-bottom: 24px;
    .item{
      padding: 0 22px;
      margin-right: 16px;
      height:40px;
      border-radius:26px;
      border:2px solid rgba(77,208,225,1);
      font-size:16px;
      font-family: 'Montserrat-Regular,Montserrat';
      color:rgba(77,208,225,1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .item:nth-of-type(1){
      padding: 0 26px;
    }
    .active{
      background-color: #4DD0E1;
      color: #fff;
    }
  }
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
  .content_box {
    width: 100%;
    .title{
      font-size: 16px;
      color: #787C86;
      padding: 24px 0;
    }
    .content{
      padding: 24px;
      width: 1484px;
      background:rgba(27,103,113,0.11);
      border-radius:0px 0px 4px 4px;
      word-wrap: break-word;
      word-break:break-all;
      width: 100%;
      font-size: 18px;
      color: #222941;
      line-height: 160%;
      margin-bottom: 330px;
    }
    .progress{
      width: 90%;
      height: 20px;
      background-color: #CCCCCC;
      position: relative;
      margin-bottom: 40px;
      .active{
        position: absolute;
        left: 0;
        top: -2px;
        width: 413px;
        height: 24px;
        background-color: #4DD0E1;
        border-radius: 2px;
      }
      .time{
        position: absolute;
        left: 103%;
        font-size: 18px;
        color: #222941;
      }
    }
    .btn_box{
      display: flex;
      justify-content: space-between;
      .btn{
        display: flex;
        .btn_item{
          width:120px;
          height:40px;
          background:rgba(77,208,225,1);
          border-radius:4px;
          font-size: 16px;
          color: #FFFFFF;
          margin-left: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

  }
}
</style>