<template>
  <div id="containt">
    <section id="contact-section" class="contact-section section">
      <h2 class="section-title edit">Get in Touch</h2>
      <div class="intro">
        <img class="profile-image" src="assets/images/profile-image.png" alt="">
        <div class="dialog edit">
          <p>I'm currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus.</p>
          <p>
            <strong class="edit">I can help with the following:</strong>
          </p>
          <ul class="list-unstyled service-list">
            <li>
              <i class="fa fa-check edit" aria-hidden="true"></i> App development with ReactJS</li>
            <li>
              <i class="fa fa-check edit" aria-hidden="true"></i> Front-end development with AngularJS</li>
            <li>
              <i class="fa fa-check edit" aria-hidden="true"></i> Back-end development with Django/Python</li>
            <li>
              <i class="fa fa-check edit" aria-hidden="true"></i> UI development</li>
            <li>
              <i class="fa fa-check edit" aria-hidden="true"></i> UX prototyping</li>
          </ul>
          <p class="edit">Drop me a line at
            <a href="mailto:someone@example.com" class="edit">james.doe@website.com</a> or call me at
            <a href="tel:01234567890" class="edit">0123 456 7890</a>
          </p>
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
        </div>
        <!--//diaplog-->
      </div>
      <!--//intro-->

    </section>
  </div>
</template>

<script>
   export default {
    data() {
      return {
        personIntro: {},
        editable: this.$store.getters.getEditable
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','concat')
    },
    mounted() {
      $('.edit')
        .attr('contenteditable', this.editable)
        .on('blur',() => {
          const html = $('#containt').html()
          this.$store.commit('editConcat',html)
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
            console.log(res.data)
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
