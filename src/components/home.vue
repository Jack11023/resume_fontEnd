<template>
  <div id="containt" v-html="html">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        personIntro: {},
        editable: this.$store.getters.getEditable,
        html: `<div class="intro">
      <div class="container text-center">
        <img class="profile-image" src="assets/images/profile-image.png" alt="">
        <h1 class="name edit">James Doe</h1>
        <div class="title edit">Full Stack Developer</div>
        <div class="profile edit">
          <p>Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
        </div>
        <!--//profile-->
      </div>
      <!--//container-->
    </div>
    <!--//intro-->

    <div class="contact-info">
      <div class="container text-center">
        <ul class="list-inline">
          <li class="email">
            <i class="fa fa-envelope"></i>
            <a href="mailto:someone@example.com" class="edit">james.doe@website.com</a>
          </li>
          <li>
            <i class="fa fa-phone"></i>
            <a href="tel: 0123456789" class="edit">0123 456 7890</a>
          </li>
          <li class="website">
            <i class="fa fa-globe"></i>
            <a href="#" target="_blank" class="edit">portfoliosite.com</a>
          </li>
        </ul>
      </div>
      <!--//container-->
    </div>`
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','home')
    },
    updated() {
      $('.edit')
        .attr('contenteditable', this.editable)
        .on('blur',() => {
          const html = $('#containt').html()
          this.$store.commit('editHome',html)
        })
    },
    methods: {
      getPerson() {
        this.$http.get('/getPerson', {
            params: {
              userName: this.$store.state.userName
            }
          })
          .then(res => {
            if(res.data.status != 200) 
              return console.log('宝贝儿,您还没有数据哦!')
            this.html = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      },
    },
    watch: {
      '$store.getters.getEditable': function (newVal) {
        this.editable = newVal
        $('.edit').attr('contenteditable', this.editable)
      }
    }
  }

</script>

<style lang="less" scoped>


</style>
