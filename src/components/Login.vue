<template>
	<div>
		<h1>login</h1>
		<form @submit.prevent="login()">
			<input type="email" required v-model="email" placeholder="email">
			<input type="password" required v-model="password" placeholder="password">
			<button type="submit">Login</button>
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
			password: ''
		}
	},
	methods : {
		login(){
			var self = this
			let emailOk = false
			this.users.every(function(e){
				if (e.email == self.email){
					emailOk = true					
				}
				if (e.email == self.email && e.password == self.password){
					self.$parent.message = 'Logged !';
					return false;
				} else {
					if (emailOk){
						self.$parent.message = 'Your password is incorrect'
					} else {
						self.$parent.message = 'No account found with this email'
					}
				}
			})
		}
	}
}
</script>
<style>
</style>
12345678!Lu