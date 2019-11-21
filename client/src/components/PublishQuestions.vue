<template>
  <div>
      <ul>
          <li v-for="publish in publishs" :key="publish.id">
              <publishcard :publish="publish"></publishcard>
          </li>
      </ul>
  </div>
</template>

<script>
import publishcard from '../components/QuestionContent.vue';
import axios from 'axios'
import store from '../store/index'

export default {
    data() {
        return {
            publishs: []
        }
    },
    components: {
        publishcard
    },
    methods: {
        getPublish() {
            axios({
                url: `${this.$store.state.baseUrl}/questions`,
                method: 'GET',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=> {
                this.publishs = data
            })
            .catch(err=> {

            })
        }
    },
    created() {
        this.getPublish()
    }
}
</script>

<style>

</style>