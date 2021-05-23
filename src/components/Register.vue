<template>
	<div>
		<form @submit.prevent="register()" class="form">
			<div class="form__group">
				<label class="form__label" for="email">Email</label>
				<input type="email" class="form__input" :class="{'form__input--valid': emailValid, 'form__input--error': email !== '' && !emailValid  }"  required v-model="email" >
			</div>
			<div class="form__group">
				<label class="form__label" for="password">Password</label>
				<input class="form__input" type="password" required v-model="password" :class="{'form__input--valid': passwordValid}">
				<ul class="form__passwordList">
					<li class="form__passwordCrit" :class="{'form__passwordCrit--valid': min8}">Minimum 8 characters</li>
					<li class="form__passwordCrit" :class="{'form__passwordCrit--valid': oneDigit}">1 number</li>
					<li class="form__passwordCrit" :class="{'form__passwordCrit--valid': oneLower}">1 lowercase letter</li>
					<li class="form__passwordCrit" :class="{'form__passwordCrit--valid': oneUpper}">1 uppercase letter</li>
					<li class="form__passwordCrit" :class="{'form__passwordCrit--valid': oneSpecial}">1 special character</li>
				</ul>
			</div>
			<button type="submit" class="form__btn" :disabled="!emailValid || !passwordValid">Register</button>
		</form>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				email: '',
				emailValid: false,
				password: '',
				min8: false,
				oneDigit: false,
				oneLower: false,
				oneUpper: false,
				oneSpecial: false,
				mailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
			}
		},
		methods: {
			register(){
				if (this.passwordValid && this.emailValid){
					this.$parent.users.push({email: this.email, password: this.password })
					this.$parent.message = "You are registered !"
					this.$parent.isMessageError = false
					this.$parent.current = 'Log In'
				}
				else {
					this.$parent.message = this.mailReg.test(this.email) ? 'Your password should have minimum 8 characters, 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number and maximum 30 characters' : "Your email does not have a proper value"
					this.$parent.isMessageError = true
				}
			}
		},
		computed: {
			passwordValid(){
				return this.min8 && this.oneDigit && this.oneLower && this.oneUpper && this.oneSpecial
			}
		},
		watch: {
			email(val){
				if (val !== ''){
					if (this.mailReg.test(val)){
						this.$parent.message = ''
						var self = this;
						let emailExists = false
						this.$parent.users.forEach(function(e){
							if (e.email == val){
								self.emailValid = false
								emailExists = true
								self.$parent.message = "This email is already taken"
								self.$parent.isMessageError = true
							}
						})
						if (!emailExists){
							this.emailValid = true
						}
					} else {
						this.emailValid = false
						this.$parent.message = ''
					}
				} else {
					this.emailValid = false
					this.$parent.message = ''
				}
			},
			password(val){
				this.min8 = /^.{8,}$/.test(val) ? true : false
				this.oneDigit = /^.*[0-9].*$/.test(val) ? true : false
				this.oneUpper = /^.*[A-Z].*$/.test(val) ? true : false
				this.oneLower = /^.*[a-z].*$/.test(val) ? true : false
				this.oneSpecial = /^.*[^\w\s].*$/.test(val) ? true : false
			}
		}
	}
</script>
<style>
</style>