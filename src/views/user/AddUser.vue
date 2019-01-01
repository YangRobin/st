<template>
  <div class="add-user">
    <div class="title">
      <h3>新增用户</h3>
    </div>
    <form action class="form">
      <div class="row">
        <div class="col-md-6">
          <div class="form-item">
            <div class="form-label">
              <label for>用户名</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="username" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>密码</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="password" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>重复密码</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="repassword" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>手机号</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="phoneNumber" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>年龄</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="phoneNumber" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>手机号</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="phoneNumber" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for></label>
            </div>
            <div class="form-content">
              <div>
                <button class="btn btn-blue">提交</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-item">
            <div class="form-label">
              <label for>户籍所在地</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="phoneNumber" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>所在学校</label>
            </div>
            <div class="form-content">
              <div>
                <button class="btn btn-blue">查找学校</button>
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>专业</label>
            </div>
            <div class="form-content">
              <div>
                <button class="btn btn-blue">查找专业</button>
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">
              <label for>用户等级</label>
            </div>
            <div class="form-content">
              <div>
                <input v-model="phoneNumber" type="text">
              </div>
              <div>
                <span class="error-info">用户名错误提示!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddUser",
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
      phoneNumer: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.add-user {
  .title {
    padding: 10px 0;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  padding: 10px;
  margin-top: 5px;
  background-color: #fff;
  .form {
    padding: 10px;
    .form-item {
      display: flex;
      align-items: center;
      .form-label {
        color: #797979;
        text-align: right;
        width: 100px;
      }
      .form-content {
        width: 90%;
        padding: 5px;
        .error-info {
          color: #fb5858;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
