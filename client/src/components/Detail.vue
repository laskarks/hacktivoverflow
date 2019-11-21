<template>
  <div style="margin-top: 30px;">

      <div class="title">
          <h3>{{ question.title }}</h3>
      </div>
      <hr>
      <div class="content" v-html="question.title">
          
      </div>
      <hr>
      <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="answer in answers" :key="answer.id">
                <answerlist :answer="answer"></answerlist>
            </li>
      </ul>
   
    <hr>
    <h4>Add Your answer</h4>
    <br>
    <vue-editor v-model="htmlForEditor"></vue-editor>
    <br>
    <button class="button is-link is-outlined" @click.prevent="addAnswer">Submit your answer</button>
      
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store/index'
import 'vuejs-noty/dist/vuejs-noty.css'
import { VueEditor } from "vue2-editor";
import answerlist from './AnswerList.vue'

export default {

    data() {
        return {
            questionId: this.$route.params.questionId,
            url: this.$store.state.baseUrl,
            question: null,
            answers:null,
            htmlForEditor: ''
        }
    },
    components: {
        VueEditor,
        answerlist
    },
    methods: {
        getQuestion() {

            axios({
                url: `${this.url}/questions/${this.questionId}`,
                method: 'GET',
                headers:{
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=> {
                this.question = data
                this.answers = data.answers
            })
            .catch(err => {
				this.$noty.error(err.response.data.message)
            })
        },
        addAnswer() {
            axios({
                url: `${this.url}/answers`,
                method: 'POST',
                data: {
                    description: this.htmlForEditor
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=> {
                this.$noty.success(data.message, {
				killer: true,
				timeout: 1000,
				layout: 'topRight'
                })
                this.getQuestion()
            })
            .catch(err => {
                this.$noty.error(err.response.data.message)
            })
        }
    },
    created() {
        this.getQuestion()
    }
}
</script>

<style>

</style>