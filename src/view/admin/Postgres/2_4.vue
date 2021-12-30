<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="中文名">
    <el-input v-model="form.chineseName"></el-input>
  </el-form-item>
  <el-form-item label="电影编号">
    <el-input v-model="form.id"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-input v-model="form.gender"></el-input>
  </el-form-item>
  <el-form-item label="生日">
    <el-input v-model="form.birthday"></el-input>
  </el-form-item>
  <el-form-item label="地区">
    <el-input v-model="form.region"></el-input>
  </el-form-item>
  <el-form-item label="简介">
    <el-input v-model="form.summary"></el-input>
  </el-form-item>
</el-form>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: '2_4',
  data () {
    return {
      form: [
        {
          id: '',
          name: ''
        }]
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    addData () {
      this.getRequest('/movie/basic/movieAdd', this.form).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
