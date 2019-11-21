<template>
<div>
    <navbar></navbar>

    <div class="columns" style="background-color:white;">
      <div class="column is-one-fifth">
            
        <nav class="panel" style="height: 100vh;">
          <p class="panel-heading">
            Menu
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Search">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">

          </p>

          <router-link :to="{name: 'publish'}">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Publish
          </a>
          </router-link>

          <router-link :to="{name: 'myQuestions'}">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            MyQuestions
          </a>
          </router-link>

          <router-link :to="{name: 'questionform'}">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
           Add question
          </a>
          </router-link>

          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
              Hallo
            </button>
          </div>
        </nav>

          </div>


          <div class="column" style="background-color:whitesmoke;">
              
              <router-view></router-view>

          </div>


    </div>


</div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import questioncontent from '../components/QuestionContent.vue'
// import { VueEditor } from "vue2-editor";

export default {
  data() {
    return {
      // htmlForEditor: ''
    }
  },
    components: {
        navbar,
        questioncontent,
        // VueEditor
    },
    methods: {
      questionFormShow() {
        this.$router.push({path: '/mainpage/questionform'})
      }
    },
    created() {
      // this.$router.push({path:'/mainpage/publishquestion'})
      this.$router.push({path: '/publish'})
    }
}
</script>

<style scoped>
.columns {
    height: 100vh;
}


</style>