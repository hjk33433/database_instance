<template>
  <div>
    <br/>
    <router-link style="text-decoration: none;" :to="{path: '/searchStaff'}">影人搜索</router-link>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="中文名">
    <el-input v-model="form.chineseTitle"></el-input>
  </el-form-item>
  <el-form-item label="区域">
    <el-select v-model="form.region" placeholder="请选择区域">
      <el-option label="中国大陆" value="中国大陆"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="语言">
    <el-select v-model="form.language" placeholder="请选择语言">
      <el-option label="汉语普通话" value="中国大陆"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="时间">
    <el-col :span="11">
      <el-input  placeholder="选择日期" v-model="form.startYear" style="width: 100%;" maxlength="4" minlenth="4"></el-input>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-input placeholder="选择日期" v-model="form.endYear" style="width: 100%;" maxlength="4" minlenth="4"></el-input>
    </el-col>
  </el-form-item>
  <!-- <el-form-item label="分类">
    <el-select v-model="form.genreIds" placeholder="请选择分类">
      <el-option label="3" value="3"></el-option>
    </el-select>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即查找</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
<div class="movie" v-for="movie in data" :key="movie.index" >
    <router-link :to="{path: '/info',query: {id: movie.id}}">
    <el-image
      style="width: 80%; height: 80%"
      :src="movie.posterUrl"
      referrerPolicy="no-referrer"
      :fit="fit"></el-image></router-link>
      </div>
  </div>
</template>
<style>
.movie {
  padding: 10px;
  color: #0b0b0c;
  border: 1px dashed black;
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
  name: 'info',
  data () {
    return {
      movie: {
      },
      genders: [],
      form: {
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
      },
      data: []
    }
  },
  created () {
    this.getMovieDetail()
  },
  methods: {
    getMovieDetail () {

    },
    onSubmit () {
      this.postRequest('/api/v1/movies', this.form).then(res => {
        this.data = res.data.list
        console.log(res)
      })
    }
  }
}
</script>
