<template>
  <div>
    <el-descriptions title="信息">
    <el-descriptions-item label="电影名">{{movie.chineseTitle}}</el-descriptions-item>
    <el-descriptions-item label="年份">{{movie.year}}</el-descriptions-item>
    <el-descriptions-item label="公映日期">{{movie.pubDate}}</el-descriptions-item>
    <el-descriptions-item label="地区">
      <el-tag size="small">学校</el-tag>
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
      movie: {
      },
      genders: []
    }
  },
  created () {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail () {
      const url = '/api/v1/movie/' + this.$route.query.id
      this.getRequest(url).then(res => {
        const data = res.data
        this.movie = data.data
        this.genders = this.movie.genders
      })
    }
  }
}
</script>
