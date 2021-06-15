const prefix = 'api'
export default (axios) => ({
  // 获取随机一张狗狗的图片数据
  getRadomImage: (params) => axios.get(`${prefix}/breeds/image/random`, params),
})
