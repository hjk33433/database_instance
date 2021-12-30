<template>
  <div>
    <el-input
    placeholder="请输入影人编号"
    prefix-icon="el-icon-search"
    @change="getData"
    v-model="input">
  </el-input>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="中文名">
    <el-input v-model="form.chineseName"></el-input>
  </el-form-item>
  <el-form-item label="影人编号">
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
  <el-image
      style="width: 100px; height: 100px"
      :src="form.avatarUrl"
      :fit="fit"></el-image>
</el-form>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: '1_4',
  data () {
    return {
      input: '',
      form: {
      }
    }
  },
  created () {
  },
  methods: {
    getData () {
      const url = '/api/v1/staff/' + this.input
      this.getRequest(url).then(res => {
        const data = res.data
        this.form = data.data
      })
    }
  }
}
</script>
