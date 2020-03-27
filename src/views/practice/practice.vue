<template>
  <div>
    <div class="header">
      <div class="left">
        <h1 class="title">Weekly Prediction</h1>
        <div class="tag2_box">
          <p v-for="(n, index) in tag2List" :key="index" class="tag2">{{n}}</p>
        </div>
      </div>  
      <div class="right">
        <div class="search_box">
          <input type="text" placeholder="Search Number / Question Content / Word" class="input">
          <img src="" alt="">
        </div>
        <div class="btn">Download</div>
      </div>  
    </div>
    <div class="catagory">
      <nav>
        <p v-for="(n, index) in navList" :key="index" class="nav_title" :style="activeIndex == index ? 'color: #FF5A00' : ''" @click="navClick(n, index)">{{n.name}}{{n.number}}</p>
      </nav>
      <p class="count">Practiced <span style="color:#FF5A00">45</span> / 1000</p>
      <div class="des">
        <p class="text">Repeat Rate: 63%</p>
        <p class="text">About half of Read Aloud questions in an exam are from Exam.</p>
        <p class="text">Exam Strategy: Speaking skill > Weekly prediction > All exam questions</p>
      </div>
      <div class="tag1_box" style="padding:0">
        <p v-for="(n, index) in tag1List" :key="index" class="tag1">{{n}}</p>
      </div>
    </div>
    <div>
      <practiceItem></practiceItem>
    </div>
  </div>
</template>

<script>
import practiceItem from './component/practiceItem'
export default {
  data() {
    return {
      tag2List: ['Speaking', 'Writing', 'Reading', 'Listening'],
      tag1List: ['All', 'Monthly Frequency', 'Weekly Prediction', 'Update'],
      navList: [
      // 'DI(533)', 'RL(412)', 'AQS(894)'
        {
          name: 'RA',
          number: '(306)'
        },
        {
          name: 'RS',
          number: '(972)'
        },
        {
          name: 'DI' ,
          number: '(972)'
        }
      ],
      navName: 'RA',
      activeIndex: ''
    }
  },
  methods: {
    navClick(n, index) {
      this.activeIndex = index
      this.navName = n.name
    }
  },
  components: {
    practiceItem
  }
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #DFDFDF;
  .left{
    .title{
      font-size:13px;
      font-family: 'Montserrat-Black, Montserrat';
      font-weight: 900;
      color:rgba(34,41,65,1);
    }
    .tag2_box{
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0;
      .tag2{
        font-size:10px;
        width: 75px;
        height: 25px;
        border-radius:16px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
          color: #ffffff !important;
        }
      }
      .tag2:nth-of-type(1){
        color: #FF5A00;
        border:1px solid #FF5A00;
        &:hover{
          background-color: #FF5A00;
        }
      }
      .tag2:nth-of-type(2){
        color: #FFA726;
        border:1px solid #FFA726;
        &:hover{
          background-color: #FFA726;
        }
      }
      .tag2:nth-of-type(3){
        color: #536DFE;
        border:1px solid #536DFE;
        &:hover{
          background-color: #536DFE;
        }
      }
      .tag2:nth-of-type(4){
        color: #21A5F3;
        border:1px solid #21A5F3;
        &:hover{
          background-color: #21A5F3;
        }
      }
    }
  }
  .right{
    display: flex;
    flex-shrink: 0;
    .search_box{
      width:321px;
      height:25px;
      border-radius:16px;
      border:1px solid rgba(204,204,204,1);
      box-sizing: border-box;
      overflow: hidden;
      .input{
        width: 100%;
        height: 98%;
        padding-right: 30px;
        border: none;
        box-sizing: border-box;
        padding-left: 12px
      }
      .img{
        width: 14px;
        height: 14px;
      }
    }
    .btn{
      margin-left: 15px;
      width:70px;
      height:25px;
      background:rgba(77,208,225,1);
      border-radius:2px;
      border:1px solid rgba(77,208,225,1);
      font-size:10px;
      color:rgba(255,255,255,1);
      text-align: center;
      line-height: 25px;
    }
  }
}
.catagory{
  padding: 15px 20px;
  border-bottom: 1px solid #DFDFDF;
  background-color: #fff;
  font-size:10px;
  color:rgba(34,41,65,1);
  nav{
    display: flex;
    padding-bottom: 10px;
    .nav_title{
      font-size:10px;
      padding-right: 61px;
      color: #222941;
      cursor: pointer;
      &:hover{
        color:rgba(255,90,0,1);
      }
    }
  }
  .count{
    padding: 10px;
  }
  .des{
    width:928px;
    // height:55px;
    background:rgba(27,103,113,0.11);
    line-height: 160%;
    border-radius:3px;
    padding: 5px 10px;
    margin-bottom: 15px;
    // .text{
    //   font-size:10px;
    //   color:rgba(34,41,65,1);
    // }
  }
  .tag1_box{
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
    .tag1{
      font-size:10px;
      color:rgba(77,208,225,1);
      padding: 9px 16px;
      border-radius:16px;
      border:1px solid rgba(77,208,225,1);
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        color: #ffffff;
        background-color: #4DD0E1;
      }
    }
  }
}
</style>