<template>
  <div class="container">
    <div class="avatar">
      <img :src="info.avatar" alt="">
    </div>
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">请登录</h1>
      <label for="inputEmail" class="sr-only">用户名:</label>
      <input type="text" :value="info.users" name="userName" id="users" class="form-control" placeholder="xx@xx.xx" required=""
        autofocus="">
      <label for="inputPassword" class="sr-only">密码:</label>
      <input type="password" :value="info.pwd" name="userPwd" id="pwd" class="form-control" placeholder="123456" required="">
      <div class="checkbox mb-3 ">
        <label class="pull-right">
          <input type="checkbox" value="1" id="saveInfo" name="saveInfo" :checked="info.save?'checked':''"> 是否保存登录信息
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" id="login" @click.prevent="postUserInfo">登录</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
    <transition name="islogin">
      <div v-if="isShow">
        <div class="alert alert-success" role="alert" v-if="isSuccess">登录成功</div>
        <div class="alert alert-danger" role="alert" v-else>登录失败!</div>
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
        isSuccess: false
      }
    },
    created() {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        this.$http.get('getlogin')
          .then(res => {
            const data = res.data.data
            if (!data) return
            this.info = {
              avatar: data.userAvatar,
              users: data.userName,
              pwd: data.userPwd,
              save: true
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      postUserInfo() {
        this.$http.post('postlogin', $('.form-signin').serialize())
          .then(res => {
            this.isShow = true
            if(res.data.status != 200) {
              this.isSuccess = false
              return
            }
            this.isSuccess = true
            setTimeout(() => {
              this.isShow = false
              this.$router.push('/')
            },3000)
          })

          .catch(err => {
            console.log(err)
          })
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
  }

</style>
