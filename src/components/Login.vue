<template>
	<div>
		<form @submit.prevent="login()" class="form">
			<div class="form__group">
				<label class="form__label" for="email">Email</label>
				<input type="email" class="form__input" required v-model="email" >
			</div>
			<div class="form__group">
				<label class="form__label" for="password">Password</label>
				<input class="form__input" type="password" required v-model="password" >
			</div>
			<button type="submit" class="form__btn" :disabled="email == '' || password == ''">Log In</button>
		</form>
	</div>
</template>
<script>
export default {
	data(){
		return {
			email: '',
			password: ''
		}
	},
	methods : {
		login(){
			this.$parent.message = ''
			var self = this
			let emailExists = false
			let passwordCorrect = false
			this.$parent.users.forEach(function(e){
				if (e.email == self.email){
					emailExists = true;
					if (e.password == self.password){
						passwordCorrect = true
						self.$parent.message = 'Logged !'
						self.$parent.isMessageError = false
					}
				} 
			})
			if (!emailExists){
				this.$parent.message = 'No account found with this email'
				this.$parent.isMessageError = true
			} else if(!passwordCorrect){
				this.$parent.message = 'Incorrect password'
				this.$parent.isMessageError = true
			}
		}
	}
}
</script>
<style>
</style>
