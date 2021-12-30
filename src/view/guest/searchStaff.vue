<template>
  <div>
    <br/>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="中文名">
    <el-input v-model="form.chineseName"></el-input>
  </el-form-item>
  <el-form-item label="英文名">
    <el-input v-model="form.englishName"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="form.gender" placeholder="请选择区域">
      <el-option label="男" value="男"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="区域">
    <el-select v-model="form.region" placeholder="请选择区域">
      <el-option label="中国大陆" value="中国大陆"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="升序/降序">
    <el-select v-model="form.orderDireaction" placeholder="请选择区域">
      <el-option label="升序" value="ASC"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即查找</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
<div class="movie" v-for="movie in data" :key="movie.index" >
    <router-link :to="{path: '/staffInfo',query: {id: movie.id}}">
    <el-image
      style="width: 100%; height: 100%"
      :src="movie.avatarUrl"
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
        'chineseName': '吴京',
        'englishName': 'Jing Wu',
        'region': '中国',
        'gender': '男',
        'orderField': 'id',
        'orderDireaction': 'ASC',
        'pageNumber': '1',
        'pageSize': '10'
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
      this.postRequest('/api/v1/staffs', this.form).then(res => {
        this.data = res.data.list
        console.log(res)
      })
    }
  }
}
</script>
