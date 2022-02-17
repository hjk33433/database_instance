<template>
<div>
  <el-container>
  <el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#B3C0D1">
  <el-menu-item ><router-link style="text-decoration: none;" :to="{path: '/search'}">搜索</router-link></el-menu-item>
  <el-menu-item ><router-link style="text-decoration: none;" :to="{path: '/GuestIndex'}">主页</router-link></el-menu-item>
  <el-menu-item v-for="genre in genres" :index="genre.id" :key="genre.id" @click="getReMovie(genre)" >{{genre.name}}</el-menu-item>
</el-menu>
  </el-header>
  <el-main><router-view/></el-main>
  <el-footer><el-pagination
  background :current-page="page" @current-change="changePage"
  layout="prev, pager, next"
  :total="1000">
</el-pagination></el-footer>
</el-container>
</div>
</template>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>
export default {
  name: 'Basic',
  data () {
    return {
      genres: [],
      req: {
        'originalTitle': '',
        'chineseTitle': '',
        'startYear': '',
        'endYear': '',
        'region': '',
        'language': '',
        'genreIds': [3],
        'pageNUmber': '1',
        'pageSize': '12',
        'orderField': 'id',
        'orderDirection': 'ASC'
      },
      page: 1
    }
  },
  created () { this.getGenres() },
  methods: {
    getGenres () {
      this.getRequest('/api/v1/genres').then(res => {
        this.genres = res.data.list
      })
    },
    getReMovie (genre) {
      this.$router.push({path: '/GuestIndex', query: {genre: genre.id}})
    },
    changePage () {
      this.$router.push({path: '/GuestIndex', query: {pageNUmber: this.page}})
    }
  }
}
</script>
