<template>
  <div>
    <div class="form">
      <el-input v-model="params.account" placeholder="Email"></el-input>
      <el-input v-model="params.password" placeholder="Password" show-password></el-input>
      <el-button type="primary" @click="submit">LogIn</el-button>
    </div>
  </div>
</template>

<script>
import { login } from '../../../src/httpRequest/user.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      params: {
        account: '',
        password: '',
      }
    }
  },
  methods: {
    // ...mapMutations(["role", "login"]),
    submit() {
      var account = this.params.account
      var password = this.params.password
      if (account && password) {
        login(this.params).then(res => {
          console.log(res)
          if(res) {
            this.$message({
              message: 'ok',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({path: '/home'})
            }, 2000);
          }
          that.$store.commit('login', res)
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.$message({
          message: '请补充相关信息',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style>
.form{
  width: 200px;
  height: 300px;
  margin: 0 auto;
  margin-top: 200px;
}

</style>