<template>
  <div class="sidebar">
    <div v-for="(n, index) in navList" :key="index" :to="n.link" class="sidebar_list" :class="activiteIndex == index ? 'acvite' : ''" @click="clickNav(n,index)">
      <img class="sider_icon" :src="activiteIndex == index ? n.activeLogo : n.logo" alt="">
      <div class="sider_title" :style="activiteIndex == index ? 'color:#fff' : ''">{{n.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activiteIndex: '',
      navList: [
        {
          logo: require('../assets/image/sidebar/home.png'),
          activeLogo: require('../assets/image/sidebar/homea.png'),
          text: 'Home',
          link: '/home'
        },
        {
          logo: require('../assets/image/sidebar/pte.png'),
          activeLogo: require('../assets/image/sidebar/ptea.png'),
          text: 'TE Guide',
          link: ''
        },
        {
          logo: require('../assets/image/sidebar/prediction.png'),
          activeLogo: require('../assets/image/sidebar/predictiona.png'),
          text: 'PTE Exam Questions',
          link: '/question'
        },
        {
          logo: require('../assets/image/sidebar/exercise.png'),
          activeLogo: require('../assets/image/sidebar/exercisea.png'),
          text: 'Prediction Practice',
          link: '/practice'
        },
        {
          logo: require('../assets/image/sidebar/data.png'),
          activeLogo: require('../assets/image/sidebar/dataa.png'),
          text: 'Data Statistics',
          link: '/statistics'
        },
        {
          logo: require('../assets/image/sidebar/message.png'),
          activeLogo: require('../assets/image/sidebar/messagea.png'),
          text: 'Notifications',
          link: ''
        },
        {
          logo: require('../assets/image/sidebar/pdf.png'),
          activeLogo: require('../assets/image/sidebar/pdfa.png'),
          text: 'Export PDF',
          link: '/exportpdf'
        },
        {
          logo: require('../assets/image/sidebar/high.png'),
          activeLogo: require('../assets/image/sidebar/higha.png'),
          text: 'Frequent Words',
          link: '/frequent'
        },
        {
          logo: require('../assets/image/sidebar/circle.png'),
          activeLogo: require('../assets/image/sidebar/circlea.png'),
          text: 'Community',
          link: ''
        },
        {
          logo: require('../assets/image/sidebar/us.png'),
          activeLogo: require('../assets/image/sidebar/usa.png'),
          text: 'About Us',
          link: '/about-us'
        },
        {
          logo: require('../assets/image/sidebar/share.png'),
          activeLogo: require('../assets/image/sidebar/sharea.png'),
          text: 'Share',
          link: ''
        }
      ]
    }
  },
  watch: {
    $route(to, from) {
      const path = to.path
      this.activiteIndex = ''
      switch (path) {
        case '/home':
          this.activiteIndex = 0
          break
        case '/question':
          this.activiteIndex = 2
          break
        case '/practice':
          this.activiteIndex = 3
          break
        case '/statistics':
          this.activiteIndex = 4
          break
        case '/exportpdf':
          this.activiteIndex = 6
          break
        case '/about-us':
          this.activiteIndex = 9
          break
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.$route.path == '/') {
        this.activiteIndex = 0
      } else if (this.$route.path == '/question') {
        this.activiteIndex = 2
      } else if (this.$route.path == '/practice') {
        this.activiteIndex = 3
      } else if (this.$route.path == '/statistics') {
        this.activiteIndex = 4
      } else if (this.$route.path == '/exportpdf') {
        this.activiteIndex = 6
      } else if (this.$route.path == '/about-us') {
        this.activiteIndex = 9
      }
    },
    clickNav(n, index) {
      this.activiteIndex = index
      if (n.link) {
        this.$router.push(n.link)
      }
    }
  }
}
</script>

<style lang="less">
  .sidebar{
    // position: fixed;
    // z-index: 11;
    // left: 0;
    // top: 95px;
    margin-left: 16px;
    width: 100%;
    background: #fff;
    color: #222941;
    font-weight: bold;
    border-radius: 4px;
    .acvite{
      background-color: #FF5A00;
    }
    .sidebar_list{ 
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      padding: 18px 0;
      .sider_icon{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-left: 15px;
        // img{
        //   width: 100%;
        //   height: 100%;
        // }
      }
      .sider_title{
        color: #222941;
        font-weight: bold;
      }
    }
  }
</style>
