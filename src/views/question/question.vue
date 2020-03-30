<template>
  <div>
    <div class="header">
      <div class="left">
        <h1 class="title">PTE Exam Question</h1>
        <div class="right">
          <div class="search_box">
            <input type="text" placeholder="Search Number / Question Content / Word" class="input">
            <img src="" alt="">
          </div>
          <div class="btn">Download</div>
        </div> 
      </div>  
      <div class="tag1_box">
        <p v-for="(n, index) in tag1List" :key="index" class="tag1">{{n}}</p>
      </div>
      <div class="tag2_box">
        <p v-for="(n, index) in tag2List" :key="index" class="tag2">{{n}}</p>
      </div>
    </div>
    <div class="catagory">
      <nav>
        <p v-for="(n, index) in navList" :key="index" class="nav_title" :style="activeIndex == index ? 'color: #FF5A00' : ''" @click="navClick(n, index)">{{n.name}}{{n.number}}</p>
      </nav>
      <div class="des">
        <div class="logo">
          {{navName}}
        </div>
        <div class="text_box">
          <p class="text">Repeat Rate: 63%</p>
          <p class="text">About half of Read Aloud questions in an exam are from Exam.</p>
          <p class="text">Exam Strategy: Speaking skill > Weekly prediction > All exam questions</p>
        </div>
      </div>
      <div class="tag1_box" style="padding:0">
        <p v-for="(n, index) in tag1List" :key="index" class="tag1">{{n}}</p>
      </div>
    </div>
    <div style="background-color: #fff;">
      <ra v-show="navName == 'RA'"></ra>
      <Rs v-show="navName == 'RS'"></Rs>
      <Di v-show="navName == 'DI'"></Di>
    </div>
  </div>
</template>

<script>
import Ra from './component/Ra.vue'
import Rs from './component/Rs.vue'
import Di from './component/Di.vue'
export default {
  data () {
    return {
      tag1List: ['All', 'Monthly Frequency', 'Weekly Prediction', 'Update'],
      tag2List: ['Speaking', 'Writing', 'Reading', 'Listening'],
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
  components: {
    Ra,
    Rs,
    Di
  },
  methods: {
    navClick(n, index) {
      this.activeIndex = index
      this.navName = n.name
    }
  }
}
</script>

<style lang="less" scoped>
.tag1_box{
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  .tag1{
    font-size:16px;
    color:rgba(77,208,225,1);
    padding: 14px 26px;
    border-radius:26px;
    border:2px solid rgba(77,208,225,1);
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      color: #ffffff;
      background-color: #4DD0E1;
    }
  }
}
.header{
  // display: flex;
  // justify-content: space-between;
  background-color: #fff;
  padding: 24px 32px;
  border-bottom: 1px solid #DFDFDF;
  .left{
    display: flex;
    justify-content: space-between;
    .title{
      font-size:20px;
      font-family: 'Montserrat-Black, Montserrat';
      font-weight: 900;
      color:rgba(34,41,65,1);
    }
  }
  .tag2_box{
    // padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
    .tag2{
      font-size:16px;
      width: 120px;
      height: 40px;
      border-radius:26px;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        color: #ffffff !important;
      }
    }
    .tag2:nth-of-type(1){
      color: #FF5A00;
      border:2px solid #FF5A00;
      &:hover{
        background-color: #FF5A00;
      }
    }
    .tag2:nth-of-type(2){
      color: #FFA726;
      border:2px solid #FFA726;
      &:hover{
        background-color: #FFA726;
      }
    }
    .tag2:nth-of-type(3){
      color: #536DFE;
      border:2px solid #536DFE;
      &:hover{
        background-color: #536DFE;
      }
    }
    .tag2:nth-of-type(4){
      color: #21A5F3;
      border:2px solid #21A5F3;
      &:hover{
        background-color: #21A5F3;
      }
    }
  }
  .right{
    display: flex;
    flex-shrink: 0;
    .search_box{
      width:513px;
      height:40px;
      border-radius:26px;
      border:2px solid rgba(204,204,204,1);
      box-sizing: border-box;
      overflow: hidden;
      .input{
        width: 100%;
        height: 98%;
        padding-right: 44px;
        border: none;
        box-sizing: border-box;
        padding-left: 17px
      }
      .img{
        width: 22px;
        height: 22px;
      }
    }
    .btn{
      margin-left: 24px;
      width:112px;
      height:40px;
      background:rgba(77,208,225,1);
      border-radius:3px;
      border:2px solid rgba(77,208,225,1);
      font-size:16px;
      color:rgba(255,255,255,1);
      text-align: center;
      line-height: 40px;
    }
  }
}
.catagory{
  padding: 24px 32px;
  border-bottom: 1px solid #DFDFDF;
  background-color: #fff;
  nav{
    display: flex;
    padding-bottom: 16px;
    .nav_title{
      font-size:16px;
      padding-right: 98px;
      color: #222941;
      cursor: pointer;
      &:hover{
        color:rgba(255,90,0,1);
      }
    }
  }
  .des{
    display: flex;
    margin-bottom: 16px;
    .logo{
      width:72px;
      height:72px;
      background:rgba(255,90,0,1);
      border-radius:8px;
      color: #fff;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
    }
    .text_box{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text{
        font-size:16px;
        color:rgba(34,41,65,1);
      }
    }
  }
}

</style>