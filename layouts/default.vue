<template>
  <div class="admin">
    <Nav></Nav>
    <div class="admin-main">
      <SideBar></SideBar>
      <div class="admin-content">
        <Nuxt></Nuxt>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/layouts/Nav/index.vue'
import SideBar from '@/components/layouts/SideBar/index.vue'
export default {
  components: {
    Nav,
    SideBar,
  },
}
</script>
<style lang="scss" scoped>
.admin {
  .admin-main {
    display: flex;
    .admin-content {
      flex: 1;
    }
  }
}
</style>
