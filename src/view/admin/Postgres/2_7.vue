<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="编号">
    <el-input v-model="form.chineseName"></el-input>
  </el-form-item>
  <el-form-item label="分类名">
    <el-input v-model="form.id"></el-input>
  </el-form-item>
</el-form>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: '2_7',
  data () {
    return {
      form: {}}
  }
}
</script>
