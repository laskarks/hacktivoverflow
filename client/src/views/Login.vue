<template>
            <div class="login-page">

        		<h1 class="header-w3ls">Stacktiv-Overdose</h1>
					<div class="mid-cls">
						<div class="swm-right-w3ls">
                            <!-- FORM  -->
							<form @submit.prevent="login">
								<div class=" header-side">
									<h4>Login With Social Icons</h4>
									<div class="buttom-social-grids">
										<ul>
											<li>
												<a href="#">
													<span class="fa fa-facebook"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="fa fa-twitter"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="fa fa-vk"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="main">
									<div class="icon-head">
										<h2>Login Here</h2>
									</div>
									<div class="form-left-w3l">
										<input type="text" placeholder="Username" v-model="username">
											<div class="clear"></div>
										</div>
										<div class="form-right-w3ls ">
											<input type="password" placeholder="Password" v-model="password">
												<div class="clear"></div>
											</div>
											<div class="btnn">
												<button type="submit">Login</button>
												<br>
												<br>
                                                <a href="#" @click.prevent="registerShow">Don't Have Account?</a>
											</div>
											</div>
										</form>
                                    <!-- END FORM  -->
									</div>
								</div>
								<div class="copy">
									<p>&copy;2019 Owl. All Rights Reserved
										<a href="#" target="_blank"></a>
									</p>
								</div>
                        </div>
</template>

<script>
import axios from 'axios'
import store from '../store/index'
import 'vuejs-noty/dist/vuejs-noty.css'

export default {
    data() {
        return {
            username: '',
            password: '',
            url: this.$store.state.baseUrl
        }
    },
    methods: {
        login() {
            axios({
                url: `${this.url}/users/login`,
                method: 'POST',
                data: {
                    username: this.username,
                    password: this.password
                }
            })
            .then(({data})=> {
                this.$noty.success(data.message, {
				killer: true,
				timeout: 1000,
				layout: 'topRight'
				})
				localStorage.setItem('token', data.token)
				this.$router.push({path: '/mainpage'})
				
			})
			.catch(err=> {
				this.$noty.error(err.response.data.message)
			})
        },
        registerShow() {
            this.$router.push({path: '/register'})
        }
    }
}
</script>

<style scoped>
	body {
		background-color: aquamarine;
	}
</style>