<template>
  <div class="login-form">
    <div class="form_l">
      <h3>
        <img src="static/img/logo2.png" alt>
        System logo
      </h3>
      <div class="form-title">
        <h2>Welcome to login system</h2>Sign in byentering the infomation below
      </div>
      <div class="form-item">
        <label for>
          <i class="iconfont icon-yonghu"></i>
        </label>
        <input type="text" v-model="username" placeholder="username">
      </div>
      <div class="form-item">
        <label for>
          <i class="iconfont icon-mima"></i>
        </label>
        <input type="password" v-model="password" name="passworld" placeholder="password">
      </div>
      <p class="form-bj">
        <input type="checkbox"> rember me
        <a href="javascript:;">Forget passworld</a>
      </p>
      <div class="form-btn">
        <button @click="login" class="login">Login</button>
        <button class="out">Sign up</button>
        <!-- <el-button type="primary">主要按钮</el-button> -->
      </div>
    </div>
    <div class="form_r">
      <img src="static/img/logo1.png" alt="png">
    </div>
  </div>
</template>
<script>
import { post } from '../../utils/request.js'
import Tool from '../../utils/Tool.js'
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    // 参数验证
    validateParams(u, p) {
      // 验证是否为空
      if (!Tool.trim(u) || !Tool.trim(p)) {
        return false
      }
      return true
    },
    loginIn(username, password) {
      post('loginin', {
        name: username,
        password
      }).then(res => {
        if (res.isSuccess) {
          window.location.href = '/'
          window.location.reload()
        }
      })
    },
    login() {
      const isValid = this.validateParams(this.username, this.password)
      if (!isValid) {
        console.log('this is robin')
      } else {
        this.loginIn(this.username, this.password)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  margin: 20px auto;
  margin-top: 100px;
  width: 800px;
  height: 400px;
  box-shadow: 0px 0px 13px 0 rgba(179, 208, 238, 0.52);
  // border:1px solid red;
  text-align: center;
  // padding:20px 0;
  border-radius: 10px;
  .form_l {
    width: 290px;
    margin: 0px 25px;
    float: left;
    h3 {
      color: #4b5963;
      text-align: left;
      img {
        width: 30px;
        height: 31px;
        position: relative;
        top: 10px;
      }
    }
    .form-title {
      font-size: 12px;
      color: #ccc;
      margin-top: 40px;
      margin-bottom: 30px;
      text-align: left;
      h2 {
        margin: 0;
        color: #4b5963;
        font-size: 22px;
      }
    }
    .form-bj {
      text-align: left;
      a {
        color: #333;
        float: right;
        text-decoration: none;
        &:hover {
          color: rgb(119, 33, 217);
        }
      }
    }
    .form-btn {
      overflow: hidden;
      margin-top: 15px;
      .login {
        background-color: rgb(119, 33, 217);
        color: #fff;
        width: 75%;
        float: left;
        border: none;
        padding: 8px 15px;
        text-align: center;
        border-radius: 16px;
        outline: none;
      }
      .out {
        background: transparent;
        border: none;
        outline: none;
      }
    }
    .form-item {
      margin: 15px 0;
      background-color: rgb(243, 242, 255);
      padding: 4px 15px;
      border-radius: 32px;
      overflow: hidden;
      line-height: 28px;
      label {
        width: 40px;
        float: left;
      }
      input {
        border: none;
        float: left;
        height: 28px;
        margin-left: 12px;
        background-color: rgb(243, 242, 255);
        outline: none;
      }
    }
  }
  .form_r {
    float: right;
    width: 450px;
    text-align: center;
    img {
      width: 400px;
      height: 400px;
    }
  }
}
</style>
