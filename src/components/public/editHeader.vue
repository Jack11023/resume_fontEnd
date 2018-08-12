<template>
  <header class="header" v-if="headFootShow">
    <div class="top-bar container-fluid">
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
          <button type="button" class="btn btn-normal btn-danger" @click="cancel">取消编辑</button>
          <button type="button" class="btn btn-normal btn-warning" data-toggle="modal" data-target="#myModal">确认保存</button>
        </li>
      </ul>
      <div style="color:#000;" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h4 class="modal-title" id="myModalLabel">
                请输入密码:
              </h4>
            </div>
            <form id="form_data">
              <div>
                <input type="password" id="user_pwd" name="userPwd" />
                <input type="hidden" id="act" value="add" name="act" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" @click.prevent="submitInfo" class="btn btn-primary">
                  提交更改
                </button>
              </div>
            </form>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </div>

  </header>
</template>

<script>
import '@/assets/plugins/jquery-1.12.4.min.js'
import '@/assets/plugins/bootstrap/js/bootstrap'
  export default {
    data() {
      return {
        Info: null
      }
    },
    created() {
      this.Info = this.$store.getters.getUserName
    },
    methods: {
      cancel() {
        this.$store.commit('makeUnEditable')
        this.$emit('cancelEdit')
      },
      submitInfo() {
        //获取当前页面组件名
        var currentItem = this.$store.getters.getCurrentItem
        if(!currentItem) return 
        //获取store仓库中userName,html等数据,在表单中获取userPwd数据
        var upper = currentItem.charAt(0).toUpperCase()
        currentItem = upper + currentItem.slice(1)
        const html = this.$store.getters[`get${currentItem}`]
        const userName = this.$store.getters.getUserName
        const userPwd = $('#user_pwd').val()
        if(!html || !userName || !userPwd)
          return
        //在formData对象中添加userName,userPwd,html
        var formData = new FormData()
        formData.append('userName',userName)
        formData.append('userPwd',userPwd)
        formData.append('html',html)
        //进行axios请求
        this.$http.post('postPerson',formData)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.log(err))
      }
    },
    props: ['headFootShow']
  }

</script>

<style lang="less" scoped>
  header {
    background-color: lightgreen;
    .top-bar {
      padding-bottom: 20px;
    }
    #users {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      margin: 0;
      padding: 0;
      padding-top: 30px;
      li {
        height: 100%;
        button {
          margin: 0 2px;
        }
        span {
          display: block;
          margin: 0 2px;
          height: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

</style>
