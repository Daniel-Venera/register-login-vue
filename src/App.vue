<template>
  <div id="app">
	<h1 class="title">{{current}}</h1>
	<div v-if='message' class="message">
		<span class="message__text" :class="{'message__text--error': isMessageError}">{{message}}</span>
	</div>
    <Login v-if="current == 'Log In'" />
    <Register v-if="current == 'Register'" />
    <!-- <Account v-if="current == 'Account'" /> -->
	<br>
	<div v-if="current == 'Register'">
		<span >You already have an account ? <a class="link" @click="toggle('Log In')">Log In</a></span>	
	</div>
	<div  v-if="current == 'Log In'">
		<span><a class="link" @click="toggle('Register')">Register</a></span>
	</div>
  </div>
</template>
<script>
import Login from './components/Login'
import Register from './components/Register'
// import Account from './components/Account'
export default {
  name: 'App',
  data(){
	  return {
		current: 'Register',
		users: [],			
		message: '',
		isMessageError: true
	  }
  },
  components: {
    Login,
	Register,
	// Account
  },
  methods: {
	  toggle(value){
		this.current = value
		this.message = ''
	  }
  }
}
</script>
<style>
	@import './assets/style.css';
</style>
