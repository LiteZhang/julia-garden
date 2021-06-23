<template>
  <div class="login-wrap">
    <div class="logo-img">
      <img class="img-style" src="../assets/img/login-bg.jpg" />
    </div>
    <div class="logo-input">
      <div class="input-layout">
        <span class="welcome-title">Welcome! </span>
        <span class="username">User Name</span>
        <input class="input-style" />
        <span class="passsword" >Password</span>
        <input class="input-style" type="password"/>
        <button class="login-btn">Login</button>
      </div>
    </div>
    <!-- <div class="ms-login">
            <div class="ms-title">管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter="submitForm()">
                        <template #prepend>+
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: "admin",
        password: "123123",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    // this.$store.commit("clearTags");
  },
  mounted() {
    console.log("Login  !!!!!!!");
  },
  methods: {
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", this.param.username);
          this.$router.push("/");
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 920px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  /* background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%; */
}
.logo-img {
  flex: 1;
  padding: 40px 40px;
  /* background-image: url(../assets/img/login-bg.jpg); */
}
.logo-input {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.input-layout {
  /* width: 470px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: #3c4767;
}

.img-style {
  width: 100%;
  height: 100%;
  border-radius: 48px;
}

.welcome-title {
  text-align: left;
  width: 100%;
  margin-top: 210px;
  font-weight: bold;
  font-size: 64px;
}

.username {
  text-align: left;
  width: 100%;
  margin-top: 60px;
  font-size: 24px;
}

.input-style {
  margin-top: 16px;
  outline-style: none;
  border: 2px solid #dcdfe6;
  border-radius: 12px;
  width: 460px;
  height: 50px;
  padding: 0 10px;
  font-size: 16px;
}

.passsword {
  text-align: left;
  width: 100%;
  margin-top: 40px;
  font-size: 24px;
}

.login-btn{
    width: 100%;
    height: 64px;
    background-color: #41D6CD;
    color: #fff;
    font-size: 24px;
    border-radius: 12px;
    margin-top: 120px;
     border: 1px solid transparent;
}

/* .password-input {
  margin-top: 16px;
  outline-style: none;
  border: 2px solid #dcdfe6;
  border-radius: 12px;
  width: 460px;
  height: 50px;
} */

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>