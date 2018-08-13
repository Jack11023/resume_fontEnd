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
        html: ` <section id="testimonials-section" class="testimonials-section section">
      <h2 class="section-title edit">Testimonials</h2>

      <div id="testimonials-carousel" class="testimonials-carousel carousel slide" data-interval="8000">

        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#testimonials-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#testimonials-carousel" data-slide-to="1"></li>
          <li data-target="#testimonials-carousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <blockquote class="quote">
              <i class="fa fa-quote-left "></i>
              <p class="edit">James is an excellent software engineer and he is passionate about what he does. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Suspendisse porttitor metus eros.</p>
            </blockquote>
            <div class="source">
              <div class="name edit">Rob Olson</div>
              <div class="position edit">Product Manager, Apple</div>
            </div>
            <!--//source-->

          </div>
          <!--//item-->
          <div class="item">
            <blockquote class="quote">
              <p class="edit">
                <i class="fa fa-quote-left"></i>
                Sed massa leo, aliquet non velit eu, volutpat vulputate odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Suspendisse porttitor metus eros, ut fringilla nulla auctor a.</p>

            </blockquote>
            <div class="source">
              <div class="name edit">Christina Jensen</div>
              <div class="position edit">Senior Developer, Twitter</div>
            </div>
            <!--//source-->

          </div>
          <!--//item-->
          <div class="item">
            <blockquote class="quote">
              <p class="edit">
                <i class="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes</p>
            </blockquote>
            <div class="source">
              <div class="name edit">Austin Ward</div>
              <div class="position edit">CEO, Startup Hub</div>
            </div>
            <!--//source-->
          </div>
          <!--//item-->

        </div>
        <!--//carousel-inner-->
      </div>
      <!--//testimonials-carousel-->

    </section>`
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','testimonials')
    },
    updated() {
      this.bindingEvent()
    },
    mounted() {
      this.bindingEvent()
    },
    methods: {
      bindingEvent() {
        $('.edit')
        .attr('contenteditable', this.editable)
        .on('blur',() => {
          const html = $('#containt').html()
          this.$store.commit('editTestimonials',html) 
        })
      },
      getPerson() {
        this.$http.get('/getTestimonials', {
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
