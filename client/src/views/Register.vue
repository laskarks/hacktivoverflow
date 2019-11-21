<template>
   <div>
        		<h1 class="header-w3ls">Stacktiv-Overdose</h1>
					<div class="mid-cls">
						<div class="swm-right-w3ls">
                            <!-- FORM  -->
							<form @submit.prevent="register">
								<div class=" header-side">
									<h4>Register With Social Icons</h4>
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
										<h2>Register Here</h2>
									</div>
									<div class="form-left-w3l">
										<input type="text" placeholder="Username" v-model="username">
										<div class="clear"></div>
									</div>
                                    <div class="form-left-w3l">
										<input type="text" placeholder="Email" v-model="email">
										<div class="clear"></div>
									</div>
										<div class="form-right-w3ls ">
											<input type="password" placeholder="Password" v-model="password">
												<div class="clear"></div>
											</div>
											<div class="btnn">
												<button type="submit">Register</button>
												<br>
												 <a href="#" @click.prevent="loginShow">Already have account?</a>
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
            email: ''
        }
    },
    methods: {
        register() {
            axios({
                url: `${this.$store.state.baseUrl}/users`,
                method: "POST",
                data: {
                    username: this.username,
                    password: this.password,
                    email: this.email
                }
            })
            .then(({data})=> {
				this.$noty.success(data.message, {
				killer: true,
				timeout: 1000,
				layout: 'topRight'
				})
				this.loginShow()
            })
            .catch(err => {
				this.$noty.error(err.response.data.message)
             
            })
		},
		loginShow() {
			this.$router.push({path: '/'})
		}
    }
}
</script>

<style>

</style>