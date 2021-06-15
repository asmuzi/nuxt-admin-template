<template>
  <div>
    <div>asyncData</div>
    <img :src="res.message" alt="" width="100" height="100" />
    <!-- {{ res }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: {
        message: '',
      },
    }
  },
  // asyncData({ $axios }) {
  //   return $axios
  //     .$get('https://dog.ceo/api/breeds/image/random')
  //     .then((res) => {
  //       return {
  //         res,
  //       }
  //     })
  // },
  asyncData({ app }) {
    return app.$api.example.getRadomImage().then((res) => {
      return {
        res:res.data,
      }
    })
  },
}
</script>
