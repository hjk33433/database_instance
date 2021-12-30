<template>
  <div class="login">
    <el-row style="margin-top: 260px; z-index: 1">
      <el-col :model="user" :offset="9" :span="6">
        <el-card
          class="login-box"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-form>
            <h1 class="title">欢迎使用Element Admin</h1>
            <p class="login-box-msg">登录</p>
            <el-form-item>
              <el-input
                type="text"
                v-model="user.userName"
                auto-complete="off"
                placeholder="请输入用户名..."
                suffix-icon="el-icon-bell"
                value="admin"
                required
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                v-model="user.password"
                auto-complete="off"
                placeholder="请输入密码..."
                suffix-icon="el-icon-edit"
                @keyup.enter.native="login"
                value="123456"
                required
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login"
                class="pull-right"
                style="width: 100%"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.login {
  background: url("https://cdn.pixabay.com/photo/2021/12/18/07/55/cup-6878196__340.jpg") no-repeat scroll center center / cover;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.login-box {
  background: #ffffff;
  border: none;
}

.login-box-msg {
  color: #000000;
  text-align: center;
}

.login-box .title {
  color: #000000;
  text-align: center;
}

</style>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        userName: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    login () {
      this.postRequest('/user/signIn', this.user).then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token)
          if (this.user.userName === 'admin') {
            this.$router.push('/index')
          } else {
            this.$router.push('/GuestIndex')
          }
        }
      })
    }
  }
}
</script>
