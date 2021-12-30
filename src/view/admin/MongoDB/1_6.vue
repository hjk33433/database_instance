<template>
  <div>
    <el-input
    placeholder="请输入电影编号"
    prefix-icon="el-icon-search"
    @change="getData"
    v-model="input">
  </el-input>
<el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="nickName" label="昵称" width="180"></el-table-column>
      <el-table-column prop="comment" label="评论" width="180"></el-table-column>
      <el-table-column prop="rating" label="评分" width="180"></el-table-column>
    </el-table>
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
      tableData: [{
        nickName: '',
        comment: ''
      }]
    }
  },
  created () {
  },
  methods: {
    getData () {
      const url = '/api/v1/movie/' + this.input + '/comments'
      this.getRequest(url).then(res => {
        const data = res.data
        this.tableData = data.list
      })
    }
  }
}
</script>
