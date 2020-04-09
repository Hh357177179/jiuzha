<template>
  <div>
    <div class="form">
      <el-input v-model="params.account" placeholder="Email"></el-input>
      <el-input v-model="params.name" placeholder="Nickname"></el-input>
      <el-input v-model="params.password" placeholder="Password" show-password></el-input>
      <el-input v-model="params.confirm_psw" placeholder="Confirm Password" show-password></el-input>
      <el-checkbox v-model="checked">I accept Terms and Conditions</el-checkbox>
      <el-button type="primary" @click="submit">Sign Up</el-button>
    </div>
  </div>
</template>

<script>
import { register } from '../../../src/httpRequest/user.js'
export default {
  data () {
    return {
      checked: true,
      params: {
        account: '',
        name: '',
        password: '',
        confirm_psw: '',
      }
    }
  },
methods: {
    submit() {
      var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      var account = this.params.account
      var name = this.params.name
      var confirm_psw = this.params.confirm_psw
      var password = this.params.password
      if (account && name && confirm_psw && password && this.checked) {
        if(!reg.test(account)) {
          this.$message({
            message: '邮箱格式错误',
            type: 'warning'
          })
          return
        }
        if(password !== confirm_psw) {
          this.$message({
            message: '密码不一致',
            type: 'warning'
          })
          return
        }
        const data = {
          account: account,
          password: password
        }
        register(data).then(res => {
          if(res) {
            this.$message({
              message: 'ok',
              type: 'success'
            })
            this.$router.push({path: '/login'})
          }
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