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
        html: `<section id="portfolio-section" class="portfolio-section section">
      <h2 class="section-title edit">Portfolio</h2>
      <ul id="filters" class="filters clearfix">
        <li class="type active edit" data-filter="*">All</li>
        <li class="type edit" data-filter=".backend">Back-end</li>
        <li class="type edit" data-filter=".frontend">Front-end</li>
      </ul>
      <!--//filters-->
      <div class="items-wrapper isotope row">
        <div class="item frontend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-1.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">AngularJS</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->
        <div class="item backend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-2.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">Django</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->
        <div class="item backend frontend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-3.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">Django/JavaScript</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->
        <div class="item frontend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-4.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">ReactJS</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->
        <div class="item backend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-5.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">Python</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->
        <div class="item backend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-6.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">JavaScript</div>
              <div class="action">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->

        <div class="item frontend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-7.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">HTML/AngularJS</div>
              <div class="action edit">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->

        <div class="item frontend backend col-md-3 col-xs-6 ">
          <div class="item-inner">
            <figure class="figure">
              <img class="img-responsive" src="assets/images/portfolio/portfolio-8.jpg" alt="" />
            </figure>
            <div class="content text-left">
              <h3 class="sub-title">
                <a href="#" class="edit">Project Lorem Ipsum</a>
              </h3>
              <div class="meta edit">Python/AngularJS</div>
              <div class="action edit">
                <a href="#" class="edit">View on Github</a>
              </div>
            </div>
            <!--//content-->
            <a class="link-mask" href="#"></a>
          </div>
          <!--//item-inner-->
        </div>
        <!--//item-->

      </div>
      <!--//item-wrapper-->

    </section>`
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','portfolio')
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
          this.$store.commit('editPortfolio',html) 
        })
      },
      getPerson() {
        this.$http.get('/getPortfolio', {
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
