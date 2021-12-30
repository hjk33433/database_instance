<template>
<div>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-coin"></i>Postgres</template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link style="text-decoration: none;" :to="{path: '/1_1'}">1.1获取全部电影类型信息</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link style="text-decoration: none;" :to="{path: '/1_2'}">1.2获取指定编号的电影信息</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link style="text-decoration: none;" :to="{path: '/1_3'}">1.3根据条件分页获取指定的电影列表</router-link></el-menu-item>
          <el-menu-item index="2-4"><router-link style="text-decoration: none;" :to="{path: '/1_4'}">1.4获取指定编号的影人信息</router-link></el-menu-item>
          <el-menu-item index="2-5"><router-link style="text-decoration: none;" :to="{path: '/1_5'}">1.5根据条件分页获取的影人信息</router-link></el-menu-item>
          <el-menu-item index="2-6"><router-link style="text-decoration: none;" :to="{path: '/1_6'}">1.6获取指定编号的电影评论</router-link></el-menu-item>
          <el-menu-item index="2-7"><router-link style="text-decoration: none;" :to="{path: '/2_4'}">2.4 电影信息增加/修改（选做）</router-link></el-menu-item>
          <el-menu-item index="2-8"><router-link style="text-decoration: none;" :to="{path: '/2_5'}">2.5影人信息增加/修改（选做）</router-link></el-menu-item>
          <el-menu-item index="2-9"><router-link style="text-decoration: none;" :to="{path: '/2_6'}">2.6电影演职员信息增加/修改（选做）</router-link></el-menu-item>
          <el-menu-item index="2-10"><router-link style="text-decoration: none;" :to="{path: '/2_7'}">2.7电影分类信息增加（选做）</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-coin"></i>MongoDB</template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link :to="{path: '/1_1'}">1.1获取全部电影类型信息</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link :to="{path: '/1_2'}">1.2获取指定编号的电影信息</router-link></el-menu-item>
          <el-menu-item index="2-3">1.3根据条件分页获取指定的电影列表</el-menu-item>
          <el-menu-item index="2-4">1.4获取指定编号的影人信息</el-menu-item>
          <el-menu-item index="2-5">1.5根据条件分页获取的影人信息</el-menu-item>
          <el-menu-item index="2-6">1.6获取指定编号的电影评论</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-coin"></i>Neo4jDB</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">1.1获取全部电影类型信息</el-menu-item>
          <el-menu-item index="3-2">1.2获取指定编号的电影信息</el-menu-item>
          <el-menu-item index="3-3">1.3根据条件分页获取指定的电影列表</el-menu-item>
          <el-menu-item index="3-4">1.4获取指定编号的影人信息</el-menu-item>
          <el-menu-item index="3-5">1.5根据条件分页获取的影人信息</el-menu-item>
          <el-menu-item index="3-6">1.6获取指定编号的电影评论</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>
</template>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    height: 100%;
  }
  .router-link {
    text-decoration: none;
  }
  html,
body,
#app,
.el-container {
  height: 100%;
}
</style>
<script>
export default {
  name: 'Basic',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
