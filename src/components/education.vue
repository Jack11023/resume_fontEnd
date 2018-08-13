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
        html: `<section id="eudcation-section" class="education-section section">
      <h2 class="section-title edit">Education</h2>
      <div class="row">
        <div class="item col-xs-12 col-sm-4">
          <div class="item-inner">
            <h3 class="degree edit">MSc Computer Science</h3>
            <div class="education-body edit">
              University College of London
            </div>
            <!--//education-body-->
            <div class="time edit">2016 - 2012</div>
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
            <h3 class="degree edit">MSc Applied Mathematics</h3>
            <div class="education-body edit">
              University of Bristol
            </div>
            <!--//education-body-->
            <div class="time edit">2010 - 2016</div>
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
            <h3 class="degree edit">BSc Creative Technology</h3>
            <div class="education-body edit">
              University of Bristol
            </div>
            <!--//education-body-->
            <div class="time edit">2007 - 2010</div>
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
    </section>`
      }
    },
    created() {
      this.getPerson()
      this.$store.commit('setCurrentItem','education')
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
        this.$http.get('/getEducation', {
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
