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
        html: `<section id="experiences-section" class="experiences-section section">
      <h2 class="section-title edit">Work Experiences</h2>
      <div class="timeline">
        <div class="item">
          <div class="work-place">
            <h3 class="place edit">Google</h3>
            <div class="location edit">
              <i class="fa fa-map-marker" aria-hidden="true"></i>Mountain View</div>
          </div>
          <div class="job-meta">
            <div class="title edit">Senior Software Engineer</div>
            <div class="time edit">2016 - Present</div>
          </div>
          <!--//job-meta-->
          <div class="job-desc">
            <p class="edit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
            <ul>
              <li class="edit">Lorem ipsum dolor sit amet</li>
              <li class="edit">Donec pede justo ante</li>
              <li class="edit">Maecenas tempus tellus eget </li>
            </ul>
          </div>
          <!--//job-desc-->
        </div>
        <!--//item-->

        <div class="item">
          <div class="work-place">
            <h3 class="place edit">Apple</h3>
            <div class="location edit">
              <i class="fa fa-map-marker" aria-hidden="true"></i>New York</div>
          </div>
          <div class="job-meta">
            <div class="title edit">Lead Software Engineer</div>
            <div class="time edit">2015 - 2016</div>
          </div>
          <!--//job-meta-->
          <div class="job-desc">
            <p class="edit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          </div>
          <!--//job-desc-->
        </div>
        <!--//item-->

        <div class="item">
          <div class="work-place">
            <h3 class="place edit">Twitter</h3>
            <div class="location edit">
              <i class="fa fa-map-marker" aria-hidden="true"></i>London</div>
          </div>
          <div class="job-meta">
            <div class="title edit">Software Engineer</div>
            <div class="time edit">2013 - 2015</div>
          </div>
          <!--//job-meta-->
          <div class="job-desc edit">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          </div>
          <!--//job-desc-->
        </div>
        <!--//item-->

        <div class="item">
          <div class="work-place">
            <h3 class="place edit">Startup Hub</h3>
            <div class="location edit">
              <i class="fa fa-map-marker" aria-hidden="true"></i>London</div>
          </div>
          <div class="job-meta">
            <div class="title edit">Founder &amp; Lead Developer</div>
            <div class="time edit">2012 - 2013</div>
          </div>
          <!--//job-meta-->
          <div class="job-desc">
            <p class="edit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          </div>
          <!--//job-desc-->
        </div>
        <!--//item-->

      </div>
      <!--//timeline-->

    </section>`
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','experiences')
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
          this.$store.commit('editExperiences',html) 
        })
      },
      getPerson() {
        this.$http.get('/getExperiences', {
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
