<template>
  <div>
    <!-- <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" -->
      <!-- url="http://foo.bar/particles.json" /> -->

    <!-- <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options" /> -->
    
    <div class="formContainer">
      <h3>企业门户网站管理系统</h3>
      <el-form 
      ref="loginFormRef" 
      :model="loginForm" 
      status-icon
      :rules="loginRules" 
      label-width="80px" 
      class="loginform"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
  
<script setup>
import {reactive,ref} from 'vue'
import {useRouter} from'vue-router'
import axios from'axios'
// const handleLogin = () => {
//   localStorage.setItem('token', "zhanghao")
// }
// const options = {
//   background: {
//     color: {
//       value: '#2d3a4b'
//     }
//   },
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: 'push'
//       },
//       onHover: {
//         enable: true,
//         mode: 'repulse'
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40
//       },
//       push: {
//         quantity: 4
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       }
//     }
//   },
//   particles: {
//     color: {
//       value: '#ffffff'
//     },
//     links: {
//       color: '#ffffff',
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1
//     },
//     collisions: {
//       enable: true
//     },
//     move: {
//       direction: 'none',
//       enable: true,
//       outMode: 'bounce',
//       random: false,
//       speed: 6,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800
//       },
//       value: 80
//     },
//     opacity: {
//       value: 0.5
//     },
//     shape: {
//       type: 'circle'
//     },
//     size: {
//       random: true,
//       value: 5
//     }
//   },
//   detectRetina: true
// }
//表单绑定的响应式对象
const loginForm = reactive({
  username:"",
  password:"",
})
const loginFormRef = ref() //表单的引用对象
const loginRules = reactive({
  username:[{required:true,message:"请输入用户名",trigger:"blur"}],
  password:[{required:true,message:"请输入密码",trigger:"blur"}],
    

})
const router = useRouter()
//提交表单函数
const submitForm = ()=>{
  //1检验表单
  loginFormRef.value.validate((valid)=>{
    console.log(valid)
    if(valid){
      // console.log(loginForm)
      // localStorage.setItem("token","zhanghao")
      axios.post("/adminapi/user/login",loginForm).then(res=>{
        console.log(res.data)
      })
      router.push("/index")

    }
  })
  //2拿到表单内容,提交后台
  //3设置token
}



</script>
  
<style lang="scss" scoped>
.formContainer{
  width: 500px;
  height: 300px;
  position:fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  background: rgba($color: #000000, $alpha: 0.3);
  color: #fff;
  text-align: center;
  padding:20px;
  h3{
    font-size: 30px;
  }
  .loginform{
    margin-top:20px;
  }
}
::v-deep .el-form-item_label{
  color:#fff;
}
</style>