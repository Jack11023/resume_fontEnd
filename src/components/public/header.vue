<template>
  <header class="header" v-if="headFootShow">
    <div class="top-bar container-fluid">
      <div class="actions">
        <a class="btn hidden-xs" to="mailto:someone@example.com">
          <i class="fa fa-paper-plane" aria-hidden="true"></i> 雇用我</a>
        <a class="btn" href="#">
          <i class="fa fa-download" aria-hidden="true"></i> 下载我的简历</a>
      </div>
      <!--//actions-->
      <ul class="social list-inline">
        <li>
          <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-github-alt" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-skype" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <!--//social-->
      <ul id="users">
        <li>
          <span class="label label-info">Hello&nbsp;{{Info}}!</span>
        </li>
        <li>
          <button type="button" class="btn btn-normal btn-primary" @click="getOut">登出</button>
        </li>
        <li>
          <button type="button" class="btn btn-normal btn-warning" @click="goRegister">注册</button>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
  import "@/assets/plugins/bootstrap/css/bootstrap.min.css"
  import "@/assets/plugins/font-awesome/css/font-awesome.css"
  import "@/assets/css/styles.css"
  export default {
    data() {
        return {
            Info: null,
        }
    },
    props: ['headFootShow'],
    created() {
        this.Info = this.$route.params.userName
    },
    methods: {
        getOut() {
            this.$router.push('/login')
        },
        goRegister() {
            this.$router.push('/register')
        }
    },
    watch: {
        '$route.path': function(newVal) {
            this.Info = this.$store.state.userName
        }
    }
  }

</script>

<style lang="less" scoped>
  header {

    #users {
        list-style: none;
        display: flex; // justify-content: space-around;
        align-items: center;
        height: 70px;
        margin: 0;
        padding: 0;
        padding-top: 30px;

        li {
            height: 100%;
            span,
            button {
                height: 100%;
                display: block;
                align-items: center;
                display: flex;          
                justify-content: center;
                margin: 0 2px;
            }
        }
    }
  }

</style>
