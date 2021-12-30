<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="中文名">
    <el-input v-model="form.chineseTitle"></el-input>
  </el-form-item>
  <el-form-item label="起始年份">
    <el-input v-model="form.startYear"></el-input>
  </el-form-item>
  <el-form-item label="结束年份">
    <el-input v-model="form.endYear"></el-input>
  </el-form-item>
  <el-form-item label="地区">
    <el-input v-model="form.region"></el-input>
  </el-form-item>
  <el-form-item label="语言">
    <el-input v-model="form.language"></el-input>
  </el-form-item>
  <el-form-item label="类型">
    <el-input v-model="form.genreIds"></el-input>
  </el-form-item>
  <el-form-item label="页码">
    <el-input v-model="form.pageNumber"></el-input>
  </el-form-item>
  <el-form-item label="页面大小">
    <el-input v-model="form.pagerSize"></el-input>
  </el-form-item>
  <el-form-item label="排序方式">
    <el-input v-model="form.orderField"></el-input>
  </el-form-item>
  <el-form-item label="排序类型">
    <el-input v-model="form.orderDirection"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="getData">立即查询</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="chineseTitle" label="ID" width="180"></el-table-column>
      <el-table-column prop="year" label="Name" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: '1_3',
  data () {
    return {
      tableData: [
        {
        }],
      form: {}
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    getData () {
      this.postRequest('/api/v1/movies', this.form).then(res => {
        console.log(res.data.list)
        this.tableData = res.data.list
      })
    }
  }
}
</script>
