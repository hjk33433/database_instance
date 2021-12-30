<template>
  <div>
    <el-descriptions title="信息">
    <el-descriptions-item label="电影名">{{staff.chineseName}}</el-descriptions-item>
    <el-descriptions-item label="英文名">{{staff.englishName}}</el-descriptions-item>
    <el-descriptions-item label="性别">{{staff.gender}}</el-descriptions-item>
    <el-descriptions-item label="地区">
      <el-tag size="small">{{staff.region}}</el-tag>
    </el-descriptions-item>
</el-descriptions>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: 'info',
  data () {
    return {
      staff: {
      }
    }
  },
  created () {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail () {
      // 1048026
      const url = '/api/v1/staff/' + this.$route.query.id
      this.getRequest(url).then(res => {
        console.log(res)
        const data = res.data
        this.staff = data.data
      })
    }
  }
}
</script>
