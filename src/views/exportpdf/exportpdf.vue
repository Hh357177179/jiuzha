<template>
<div>
  <div class="top">
    <h1 class="title">Select Files Need To Download</h1>
    <!-- 筛选条件 -->
    <div class="screen">
      <div class="synthesize">
        <p class="tag" v-for="(n, index) in tag" :key="index">{{n}}</p>
      </div>
      <ul class="screen_box">
        <li class="item">
          <p class="label">Speaking</p>
          <div class="content">
            <p class="choice_item" v-for="(n, index) in arr" :key="index">{{n}}</p>
          </div>
        </li>
        <li class="item">
          <p class="label">Writing</p>
          <div class="content">
            <p class="choice_item" v-for="(n, index) in arr1" :key="index">{{n}}</p>
          </div>
        </li>
        <li class="item">
          <p class="label">Reading</p>
          <div class="content">
            <p class="choice_item" v-for="(n, index) in arr2" :key="index">{{n}}</p>
          </div>
        </li>
        <li class="item">
          <p class="label">Listening</p>
          <div class="content">
            <p class="choice_item" v-for="(n, index) in arr3" :key="index">{{n}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="operation">
      <p class="statistics">Select: <span class="number">40</span>Files, <span class="number">231</span>Exam Questions</p>
      <div class="box">
        <p class="time">Update Time：16/03/20</p>
        <div class="btn_box">
          <p class="btn">Clear</p>
          <p class="btn">Download</p>
        </div>
      </div>
    </div>
  </div>
  <div class="recommend">
    <div>
      
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      tag: ['All', 'Monthly Frequency', 'Weekly Prediction', 'Update', 'Unpracticed' ],
      arr: ['ALL', 'RA', 'RS', 'DI', 'RA', 'ASQ'],
      arr1: ['ALL', 'SWT', 'WE'],
      arr2: ['ALL', 'RMCS', 'RMCM', 'RO', 'RFIB', 'FIBW'],
      arr3: ['ALL', 'SST', 'MCM', 'FIB', 'HCS', 'MCS', 'SMW', 'HIW', 'WFD'],
    }
  }
}
</script>

<style lang="less" scoped>
.top{
  padding: 24px 30px;
  padding-bottom: 0;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 24px;
  .title{
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 25px;
    border-bottom: 1px solid #DFDFDF;
  }
  .screen{
    padding: 24px 0;
    border-bottom: 1px solid #DFDFDF;
    .synthesize{
      display: flex;
      margin-bottom: 16px;
      .tag{
        height: 48px;
        border: 2px solid #4DD0E1;
        color: #4DD0E1;
        font-size: 18px;
        padding: 0 12px;
        margin-right: 16px;
        border-radius: 26px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover{
          background-color: #4DD0E1;
          color: #fff;
        }
      }
      .tag:nth-of-type(1){
        padding: 0 39px;
      }
    }
  }
  .screen_box{
    .item{
      display: flex;
      // align-items: center;
      // padding-bottom: 16px;
      .label{
        flex-shrink: 0;
        width: 100px;;
        font-size: 18px;
        color: #4DD0E1;
        font-weight: bold;
        margin-right: 30px;
      }
      .content{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .choice_item{
          width: 82px;
          height: 32px;
          border: 2px solid #4DD0E1;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 37px;
          margin-bottom: 16px;
          border-radius: 16px;
          color: #4DD0E1;
          cursor: pointer;
          &:hover{
            color: #fff;
            background-color: #4DD0E1;
          }
        }
      }
    }
  }
  .operation{
    padding: 24px 0;
    .statistics{
      font-size: 18px;
      color: #222941;
      margin-bottom: 24px;
      text-align: right;
      .number{
        color: #FF5A00;
        font-weight: bold;
      }
    }
    .box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time{
        font-size: 16px;
        color: #A1A4AB;
      }
      .btn_box{
        display: flex;
        .btn{
          width: 112px;
          height: 40px;
          margin-right: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #4DD0E1;
          border-radius: 3px;
        }
        .btn:nth-last-of-type(1){
          margin: 0;
        }
      }
    }
  }
}
</style>