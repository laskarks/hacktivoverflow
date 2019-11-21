<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
        {{publish.title}}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content" v-html="publish.description">
     
      <br>
    </div>
  </div>
  <div style="margin-left: 20px;">
    <strong>Post by: {{publish.userId.username}}</strong>
    <br>
    <em>UpVote: {{countUpvote}}</em><br>
    <em>DownVote: {{countDownvote}}</em>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" style="color:green;" @click.prevent="upvote"><i class="fas fa-hand-point-up"></i></a>
    
    <router-link :to="`detail/${publish._id}`">
    <a href="#" class="card-footer-item" style="color:blue;">See Detail</a>
    </router-link>
    <a href="#" class="card-footer-item" style="color:red;" @click.prevent="downvote"><i class="fas fa-thumbs-down"></i></a>
  </footer>
</div>
</template>

<script>
import axios from 'axios'
import store from '../store/index'
import 'vuejs-noty/dist/vuejs-noty.css'

export default {
  data() {
    return {
      countUpvote: 0,
      countDownVote: 0
    }
  },
  props: ['publish','deleted'],
  methods: {
    upvote() {
      axios({
        url: `${this.$store.state.baseUrl}/questions/${this.publish._id}/upvote`,
        method: 'PATCH',
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
        this.countUpvote = data.question.upVote.length
        this.countDownVote = data.question.downVote.length
      })
      .catch(err => {
        this.$noty.error(err.response.data.message)
      })
    },
    downvote() {
      axios({
        url: `${this.$store.state.baseUrl}/questions/${this.publish._id}/downvote`,
        method: 'PATCH',
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
        this.countUpvote = data.question.upVote.length
        this.countDownVote = data.question.downVote.length
       
      })
      .catch(err=> {
        this.$noty.error(err.response.data.message)
      })
    }
  }

}
</script>

<style>
.card {
    margin: 5px 3px 5px 3px ;
    
}

.card-content {
    background-color: beige;
}

.card-header {
    height: 50px;
}

.card-footer {
    height: 50px;
}

</style>