<template>
    <div>
    
    <ul>
        <li v-for="myquestion in myquestions" :key="myquestion.id">
            <mycard :myquestion='myquestion' v-on:deleted="getMyQuestions()"></mycard>
        </li>
    </ul>
    </div>
</template> 

<script>
import mycard from '../components/MyQuestioncards.vue'
import axios from 'axios'
import store from '../store/index'
export default {
    components: {
        mycard
    },
    data() {
        return {
            myquestions: []
        }
    },
    methods: {
        getMyQuestions() {
            axios({
                url: `${this.$store.state.baseUrl}/questions/me`,
                method: 'GET',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=> {
               
                this.myquestions = data
               
            })
            .catch(err=> {
                this.$noty.error(err.response.data.message)
            })
        }
    },
    created() {
        this.getMyQuestions()
    }
}
</script>

<style>

</style>