<template>
  <div id="containt">
    <section id="skills-section" class="skills-section section text-center">
      <h2 class="section-title edit">Professional Skills</h2>
      <div class="top-skills">
        <h3 class="subtitle edit">Top Skills</h3>
        <div class="row">
          <div class="item col-xs-12 col-sm-4">
            <div class="item-inner">
              <div class="chart-easy-pie text-center">
                <div class="chart-theme-1 chart" data-percent="98">
                  <span class="edit">98</span>%</div>
              </div>
              <h4 class="skill-name edit">Python &amp; Django</h4>
              <div class="level edit">Expert, 8 years</div>
              <div class="desc edit">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient
              </div>
            </div>
            <!--//item-inner-->
          </div>
          <!--//item-->
          <div class="item col-xs-12 col-sm-4">
            <div class="item-inner">
              <div class="chart-easy-pie text-center">
                <div class="chart-theme-1 chart" data-percent="90">
                  <span class="edit">90</span>%</div>
              </div>
              <h4 class="skill-name">JavaScript</h4>
              <div class="level edit">Expert, 8 years</div>
              <div class="desc edit">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient
              </div>
            </div>
            <!--//item-inner-->
          </div>
          <!--//item-->
          <div class="item col-xs-12 col-sm-4">
            <div class="item-inner">
              <div class="chart-easy-pie text-center">
                <div class="chart-theme-1 chart" data-percent="85">
                  <span class="edit">85</span>%</div>
              </div>
              <h4 class="skill-name edit">React &amp; Angular</h4>
              <div class="level edit">Advanced, 4 years</div>
              <div class="desc edit">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient
              </div>
            </div>
            <!--//item-inner-->
          </div>
          <!--//item-->
        </div>
        <!--//row-->
      </div>
      <!--//top-skills-->

      <div class="other-skills">
        <h3 class="subtitle edit">Other Skills</h3>
        <div class="misc-skills">
          <span class="skill-tag edit">HTML5</span>
          <span class="skill-tag edit">CSS3</span>
          <span class="skill-tag edit">SASS</span>
          <span class="skill-tag edit">LESS</span>
          <span class="skill-tag edit">Git</span>
          <br>
          <span class="skill-tag edit">Ruby</span>
          <span class="skill-tag edit">PHP</span>
          <span class="skill-tag edit">Wireframe</span>
          <span class="skill-tag edit">Spanish</span>
          <span class="skill-tag edit">French</span>
        </div>
      </div>
      <!--//other-skills-->

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
      this.$store.commit('setCurrentItem','skills')
    },
    mounted() {
      $('.edit')
        .attr('contenteditable', this.editable)
        .on('blur',() => {
          const html = $('#containt').html()
          this.$store.commit('editSkills',html)
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
