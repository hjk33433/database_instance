<template>
  <div>
    <div class="top">
    </div>
    <div class="main">
    <div class="movie" v-for="movie in data" :key="movie.index" >
    <router-link :to="{path: '/info',query: {id: movie.id}}">
    <el-image
      style="width: 80%; height: 80%"
      :src="movie.posterUrl"
      referrerPolicy="no-referrer"
      :fit="fit"></el-image></router-link>
      </div>
  </div>
  </div>

</template>
<style>
.movie {
  padding: 10px;
  color: #0b0b0c;
  border: 1px dashed black;
  /* background: url("http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"); */
  margin: 5px;
  float: left;
  width: 180px;
  height: 240px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}
</style>
<script>
export default {
  name: 'index',
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      data: [],
      req: {
        'originalTitle': '',
        'chineseTitle': '',
        'startYear': '2015',
        'endYear': '2018',
        'region': '中国大陆',
        'language': '汉语普通话',
        'genreIds': [3],
        'pageNUmber': '1',
        'pageSize': '12',
        'orderField': 'id',
        'orderDirection': 'ASC'
      }
    }
  },
  created () {
    // this.req.genreIds[0] = this.$route.query.genre
    this.getMovies()
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    getMovies () {
      this.postRequest('/api/v1/movies', this.req).then(res => {
        this.data = res.data.list
        console.log(res)
      })
    }
  }
}
</script>
