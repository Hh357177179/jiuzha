<template>
  <div>
    <div class="box" v-for="(n,index) in arr" :key="index">
      <p class="title">{{n.title}}</p>
      <div class="data">
        <div v-for="(i, index) in n.item" :key="index" class="catagory">
          <p class="number">{{i.number}}</p>
          <p class="name">{{i.name}}</p>
        </div>
      </div>
    </div>
    <!-- rank -->
    <div class="rank">
      <!-- 日榜 -->
      <div class="rank_box">
        <div class="title">
          <p class="name">Daily Rankings</p>
          <p class="date">28/03/2020</p>
        </div>
        <ul class="rank_list">
          <li class="item">
            <div class="left">
              <p class="index">1</p>
              <img class="avatar" src="" alt="">
              <p class="name">AMY</p>
            </div>
            <p class="total_number">890 Question</p>
          </li>
          <li class="item" v-for="(n,index) in 10" :key="index">
            <div class="left">
              <p class="index">{{index + 1}}</p>
              <img class="avatar" src="" alt="">
              <p class="name">AMY</p>
            </div>
            <p class="total_number">890 Question</p>
          </li>
        </ul>
        <pagination v-show="true" :total="1000" :page.sync="params.page" :limit.sync="params.size" @pagination="getList" style="text-align:center"/>
      </div>
      <!-- 月榜 -->
      <div style="margin:0" class="rank_box">
        <div class="title">
          <p class="name">Daily Rankings</p>
          <p class="date">28/03/2020</p>
        </div>
        <ul class="rank_list">
          <li class="item">
            <div class="left">
              <p class="index">1</p>
              <img class="avatar" src="" alt="">
              <p class="name">AMY</p>
            </div>
            <p class="total_number">890 Question</p>
          </li>
          <li class="item" v-for="(n,index) in 10" :key="index">
            <div class="left">
              <p class="index">{{index + 1}}</p>
              <img class="avatar" src="" alt="">
              <p class="name">AMY</p>
            </div>
            <p class="total_number">890 Question</p>
          </li>
        </ul>
        <pagination v-show="true" :total="1000" :page.sync="params.page" :limit.sync="params.size" @pagination="getList" style="text-align:center"/>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/pagination';
export default {
  data() {
    return {
      arr: [
        {
          title: 'Practice Hours：381.5',
          item: [
            {
              name: 'Speaking',
              number: 100
            },
            {
              name: 'Writing',
              number: 100.5
            },
            {
              name: 'Reading',
              number: 80.5
            },
            {
              name: 'Listening',
              number: 100.5
            }
          ]
        },
        {
          title: 'Total Practiced：2714 question',
          item: [
            {
              name: 'Speaking',
              number: 123
            },
            {
              name: 'Writing',
              number: 123
            },
            {
              name: 'Reading',
              number: 1234
            },
            {
              name: 'Listening',
              number: 1234
            }
          ]
        }
      ],
      params: {
        page: 1,
        size: 10
      }
    }
  },
  components: {
    pagination
  },
  mounted() {
    
  },
  methods: {
    getList() {

    }
  }
}
</script>

<style lang="less" scoped>
.box{
  background-color: #fff;
  padding: 25px 30px;
  margin-bottom: 25px;
  border-radius: 4px;
  .title{
    font-size: 20px;
    color: #222941;
    padding-bottom: 25px;
    font-weight: bold;
  }
  .data{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    .catagory{
      text-align: center;
      .name{
        font-size: 18px;
        padding-top: 10px;
      }
      .number{
        font-size: 48px;
        font-weight: bold;
      }
    }
    .catagory:nth-of-type(1){
      color: #FF5A00
    }
    .catagory:nth-of-type(2){
      color: #FFA726;
    }
    .catagory:nth-of-type(3){
      color: #536DFE
    }
    .catagory:nth-of-type(4){
      color: #21A5F3;
    }
  }
}
.rank{
  display: flex;
  width: 100%;
  .rank_box{
    padding: 24px 29px;
    border-radius: 4px;
    background-color: #fff;
    margin-right: 24px;
    flex-grow: 1;
    .title{
      border-bottom: 1px solid #DFDFDF;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      .name{
        font-size: 20px;
        font-weight: bold;
        color: #222941;
      }
      .date{
        font-size: 18px;
        color: #222941;
      }
    }
    .rank_list{
      .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        padding-top: 0;
        color: #222941;
        .left{
          display: flex;
          align-items: center;
          .index{
            font-size: 20px;
            font-weight: bold;
            padding-right: 45px;
          }
          .avatar{
            width: 36px;
            height: 36px;
            border: 1px solid #eee;
            border-radius: 50%;
            margin-right: 16px;
          }
          .name{
            font-size: 16px;
          }
        }
        .total_number{
          font-size: 16px;
        }
      }
      .item:nth-of-type(1){
        color: #FF6666;
        padding-top: 16px;
        padding-bottom: 11px;
        border-bottom: 2px dashed #DFDFDF;
        .total_number{
          font-weight: bold;
        }
      }
      .item:nth-of-type(2){
        color: #786BF0;
        padding-top: 11px;
      }
      .item:nth-of-type(3){
        color: #33D673;
      }
    }
  }
}

</style>