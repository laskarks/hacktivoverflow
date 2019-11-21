<template>
    <div style="margin-top: 30px; margin-right:10px;">
        <h3 style="margin-bottom: 5px;">Title</h3>
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="title">
            </div>
        </div>
        <vue-editor v-model="htmlForEditor"></vue-editor>
        <div style="margin-top: 20px">
            <button class="button is-primary is-outlined" @click="addQuestion">Add Question</button>
        </div>

    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios'
import store from '../store/index'
import 'vuejs-noty/dist/vuejs-noty.css'


export default {
    data(){
        return {
            title:'',
            htmlForEditor: ''
        }   
    },
    components:{
        VueEditor
    },
    methods: {

        addQuestion() {
            
            axios({
                url: `${this.$store.state.baseUrl}/questions`,
                method: 'POST',
                headers: {
                    token: localStorage.getItem('token')
                },
                data: {
                    title: this.title,
                    description: this.htmlForEditor
                }
            })
            .then(({data})=> {
				this.$noty.success(data.message, {
				killer: true,
				timeout: 1000,
				layout: 'topRight'
				})
                
            })
            .catch(err => {
              
                this.$noty.error(err.response.data)
            })
        }
    }
}
</script>

<style>

</style>