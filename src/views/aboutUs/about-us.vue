<template>
  <div>
    <div v-html="detail"></div>
  </div>
</template>

<script>
import { aboutUs } from '../../httpRequest/about.js'

export default {
  data() {
    return {
      detail: ''
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      console.log('kkk')
      aboutUs().then(res => {
        console.log(res)
        this.detail = res.info
      })
    }
  }
}
</script>

<style>

</style>