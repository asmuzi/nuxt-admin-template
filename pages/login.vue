<template>
  <div>
    <div>login</div>
    <el-input size="small" clearable v-model="val"></el-input>
    <el-button plain size="small" type="danger" @click="logOut">退出</el-button>
    <el-button plain size="small" type="primary" @click="loginIn"
      >登录</el-button
    >
  </div>
</template>

<script>
export default {
  layout: 'login',
  // middleware: ['notAuthenticated'],
  data() {
    return {
      val: 'token',
    }
  },
  methods: {
    getToken() {
      const token = this.$cookies.get('token')
      if (token) {
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    },
    loginIn() {
      this.$cookies.set('token', this.val)
      this.getToken()
    },
    logOut() {
      this.$cookies.remove('token')
      this.getToken()
    },
  },
}
</script>
