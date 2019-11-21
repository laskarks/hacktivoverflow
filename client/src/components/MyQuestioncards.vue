<template>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
        {{myquestion.title}}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content" v-html="myquestion.description">
   
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" style="color:green;">Edit</a>
    <a href="#" class="card-footer-item" style="color:red;" @click="deleteQuestion">Delete</a>
  </footer>
</div>
</template>

<script>
import axios from 'axios'
import store from '../store/index'
import 'vuejs-noty/dist/vuejs-noty.css'


export default {
    props: ['myquestion','deleted'],
    methods: {
        deleteQuestion() {
            axios({
                url: `${this.$store.state.baseUrl}/questions/${this.myquestion._id}`,
                method: 'DELETE',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=> {
                this.$emit('deleted')
                this.$noty.success(data.message, {
                killer: true,
                timeout: 1000,
                layout: 'topRight'
                })
            })
            .catch(err => {
                this.$noty.error(err.response.data.message)
            })
        },
        editQuestion() {
       
        }
    }
}
</script>

<style>

</style>