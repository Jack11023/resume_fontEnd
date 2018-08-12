<template>
  <div class="container">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">注册</h1>
      <label for="inputEmail" class="sr-only">用户名:</label>
      用户名:
      <input type="text" :value="info.users" name="userName" id="users" class="form-control" placeholder="xx@xx.xx" required=""
        autofocus="">
      <label for="inputPassword" class="sr-only">密码:</label>
      密码:
      <input type="password" :value="info.pwd" name="userPwd" id="pwd" class="form-control" placeholder="123456" required=""> 
      上传头像:
      <div class="task-upimg">
        <a class="text">+添加图片</a>
        <img class="upimg" src="">
        <input type="file"  @change="putfile" ref="avatar" class="task-up-input avatar" id="task-up-input" name="avatar" value="">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" id="login" @click.prevent="postUserInfo">注册</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
    <transition name="islogin">
      <div v-if="isShow">
        <div class="alert alert-success" role="alert" v-if="isSuccess">注册成功</div>
        <div class="alert alert-danger" role="alert" v-else>注册失败!</div>
      </div>
    </transition>
  </div>
</template>

<script>
  import '../../node_modules/bootstrap/dist/css/bootstrap.css'
  export default {
    data() {
      return {
        info: {},
        isShow: false,
        isSuccess: false,
      }
    },
    methods: {
      postUserInfo() {
        var formData = new FormData()
        formData.append('avatar',document.getElementById("task-up-input").files[0])
        formData.append('users',$('#users').val())
        formData.append('pwd',$('#pwd').val())
        this.$http.post('register', formData)
          .then(res => {
            this.isShow = true
            if (res.data.status != 200) {
              this.isSuccess = false
              return
            }
            this.isSuccess = true
            setTimeout(() => {
              this.isShow = false
              this.$router.push('/login')
            }, 3000)
          })
          .catch(err => {
            console.log(err)
          })
      },
      putfile() {
            var file = document.getElementById("task-up-input").files[0]; 
            if(!/image\/\w+/.test(file.type)){ 
                alert("看清楚，这个需要图片！"); 
                return false; 
            } 
            var reader = new FileReader(); 
            reader.readAsDataURL(file); 
            reader.onload=(e) => { 
                $('.upimg').attr('src',reader.result).show()
            } 
      }
    }
  }

</script>

<style lang="less" scoped>
  .container {
    width: 350px;
    margin-top: 100px;
    .avatar {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .islogin-enter,
    .islogin-leave-to {
      opacity: 0;
    }
    .islogin-enter-active,
    .islogin-leave-active {
      transition: all 3s ease
    }
    .task-upimg {
    width: 172px;
    height: 135px;
    line-height: 135px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    text-align: center;
    position: relative;
    background-color: #eee;
    .text {
        cursor: pointer;
        text-decoration: underline;
        color: #009DF8;
        font-size: 18px;
    }
    .upimg {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
    }
    .task-up-input {
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        opacity: 0;
        filter: alpha(opacity=0);
        font-size: 500px;
        cursor: pointer;
        overflow: hidden;
    }
}
  }

</style>
