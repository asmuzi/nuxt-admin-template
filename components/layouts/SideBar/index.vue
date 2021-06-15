<template>
  <div class="admin-sidebar">
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/login">登录</nuxt-link>
    <nuxt-link to="/router">路由</nuxt-link>
    <nuxt-link to="/vuex">vuex</nuxt-link>
    <nuxt-link to="/asyncData">asyncData</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.admin-sidebar {
  a {
    text-decoration: none;
    display: block;
    &.nuxt-link-exact-active {
      color: #3377ff;
    }
  }
}
</style>
