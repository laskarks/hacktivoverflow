<template>
    <ul>
        <li v-for="myquestion in myQuestions" :key="myquestion.id">
            <mycard :myquestion='myquestions'></mycard>
        </li>
    </ul>
</template>

<script>
import mycard from '../components/MyQuestioncards.vue'
import axios from 'axios'
import store from '../store/index'
import { mapState } from "vuex";
export default {
    components: {
        mycard
    },
    data() {
        return {
            
        }
    },
    methods: {
        // getMyQuestions() {
        //     axios({
        //         url: `${this.$store.state.baseUrl}/questions/me`,
        //         method: 'GET',
        //         headers: {
        //             token: localStorage.getItem('token')
        //         }
        //     })
        //     .then(({data})=> {
        //         this.$noty.success(data.message, {
		// 		killer: true,
		// 		timeout: 1000,
		// 		layout: 'topRight'
		// 		})
        //         this.myquestions = data
        //     })
        //     .catch(err=> {
        //         this.$noty.error(err.response.data.message)
        //     })
        // }
    },
    computed: {
        ...mapState(['myQuestions'])
    },
    created() {
        this.$store.dispatch('getMyQuestions')
    }
}
</script>

<style>


</style>