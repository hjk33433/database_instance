<template>
  <div>
    <div class="movie">内部div2</div>
    <div class="movie">内部div3</div>
    <div class="movie">内部div4</div>
    <div class="movie">内部div5</div>
  </div>
</template>
<style>
.movie {
  padding: 10px;
  color: #1E90FF;
  border: 1px dashed black;
  background: url("http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg");
  margin: 5px;
  float: left;
  width: 189px;
  height: 264px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

</style>
<script>
export default {
  name: 'index'
}
</script>
