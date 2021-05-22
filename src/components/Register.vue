<template>
	<div>
		<h1>Register</h1>
		<form @submit.prevent="register()">
			<input type="email" required v-model="email" placeholder="email">
			<input type="password" required v-model="password" placeholder="password">
			<button type="submit">Register</button>
		</form>
	</div>
</template>
<script>
	export default {
		props: {
			users: Array,
			message: String
		},
		data(){
			return {
				email: '',
				password: '',
				mailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
				passReg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
			}
		},
		methods: {
			register(){
				if (this.passReg.test(this.password) && this.mailReg.test(this.email)){
					var self = this
					var emailAlreadyExists = false
					this.users.forEach(function(e){
						if (e.email == self.email){
							console.log('oui');
							self.$parent.message = "This email is already taken"
							emailAlreadyExists = true
						}
					})
					if (!emailAlreadyExists){
						let newUser = {
							email: this.email,
							password: this.password,
						}
						this.users.push(newUser)
						this.$parent.message = "You are registered !"		
					}
				}
				else {
					if (!this.mailReg.test(this.email)) {
						this.$parent.message = "Your email does not have a proper value"
					} else{
						this.$parent.message = 'Your password should have minimum 8 characters, 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number and maximum 30 characters'
					}
				}
			}
		}
	}
</script>
<style>
</style>