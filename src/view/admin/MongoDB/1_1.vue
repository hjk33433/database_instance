<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: '1_1',
  data () {
    return {
      tableData: [
        {
          id: '',
          name: ''
        }]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.getRequest('/api/v1/genres').then(res => {
        console.log(res.data.list)
        this.tableData = res.data.list
      })
    }
  }
}
</script>
