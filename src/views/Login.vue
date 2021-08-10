<template>
  <div class="login-wrap" :style="{ height: screenHeight + 'px' }">
    <div class="logo-img" >
      <img class="img-style" src="../assets/img/login-bg.jpg" />
    </div>
    <!-- <div class="login-input" :style="{ height: screenHeight + 'px', 'margin-top': (screenHeight/10) + 'px'}"> -->
    <div class="login-input" :style="{ height: screenHeight + 'px'}">
      <div class="input-layout">
        <el-form
          :model="param"
          :rules="rules"
          ref="login"
          label-width="0px"
          class="input-layout" >
          <span class="welcome-title">Welcome! </span>
          <el-form-item
            prop="username"
            style="display: flex; flex-direction: column">
            <span class="username" :style="{ 'margin-top': (screenHeight/30) + 'px'}">User Name</span>
            <el-input
              class="input-style"
              v-model="param.username"
              placeholder="username"
              clearable />
          </el-form-item>
          <el-form-item prop="password">
            <div style="display: flex;  flex-direction: row;">
            <span class="passsword">Password</span>
             <!-- <button type="password" @click="switchVisibility">show / hide</button> -->
            </div>
            <el-input
              class="input-style"
              :type="passwordFieldType"
              v-model="param.password"
              clearable />
          </el-form-item>
          <button class="login-btn"  :style="{ 'margin-top': (screenHeight/16) + 'px'}" @click="loginAction">Login</button>
         
        </el-form>
         <span style="text-align: right; color: #5E6D82; font-size: 16px;" :style="{ 'margin-top': (screenHeight/16) + 'px'}">x H.E.A.R.T.S. by WiRUSH </span>
         <span style="margin-top:4px;  text-align: right; margin-bottom: 20px; color: #5E6D82; font-size: 16px;">Healthfulness for Elderly with ARTS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: "admin",
        password: "123123"
      },
      screenHeight: document.body.clientHeight,
      passwordFieldType: "password",
      rules: {
        username: [
          {
            required: true,
            message: "Please input the  account ",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please input the  password",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    // this.$store.commit("clearTags");
  },
  mounted() {
    console.log("Login  @@@@");
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight;
        that.screenHeight = window.screenHeight;
      })();
    };
  },
  watch: {
 screenHeight (val) {
    // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
    if (!this.timer) {
      // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
      this.screenHeight = val
      this.timer = true
      let that = this
      setTimeout(function () {
        // 打印screenWidth变化的值
        console.log(that.screenHeight)
        that.timer = false
      }, 400)
    }
  }
},
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success("Login Success");
          localStorage.setItem("ms_username", this.param.username);
          this.$router.push("/");
        } else {
          this.$message.error(" Please input the account and the password");
          return false;
        }
      });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    loginAction () {
      console.log('Login Action')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.login-wrap {
  position: relative;
  width: 100%;
  //height: 940px;
  background-color: #fff;
  background-color: $bg;
  display: flex;
  flex-direction: row;
}
.logo-img {
  flex: 1;
  padding: 20px 20px;
  /* background-image: url(../assets/img/login-bg.jpg); */
}
.login-input {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.input-layout {
  width: 470px;
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
  // margin-top: 120px;
  font-weight: bold;
  font-size: 64px;
}

.username {
  text-align: left;
  width: 100%;
  font-size: 24px;
  // margin-top: 100px;
}

.input-style .el-input__inner {
  margin-top: 16px;
  outline-style: none;
  border: 2px solid #dcdfe6;
  border-radius: 12px;
  width: 460px;
  height: 50px;
  padding: 0 10px;
  font-size: 16px;
}

/* .input-layout .el-input__suffix{
 width: 30px;
 height: 30px;
} */
.input-layout .el-input__clear {
  // margin-top: 20px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.passsword {
  text-align: left;
  width: 100%;
  /* margin-top: 40px; */
  font-size: 24px;
}

.login-btn {
  width: 100%;
  height: 64px;
  background-color: #41d6cd;
  color: #fff;
  font-size: 24px;
  border-radius: 12px;
  margin-top: 60px;
  border: 1px solid transparent;
}

.el-form-item__content {
  display: flex;
  flex-direction: column;
}
· .input-style {
  margin-top: 0px;
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
  margin-top: 60px;
  /* padding: 30px 30px; */
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