<template>
  <div id="app">
    <Login v-if="current == 'login'" :users="users" :message='message'/>
    <Register v-else :users="users" :message='message'/>
	{{message}}
	<br>
	<button @click="toggle('register')">register</button>
	<button @click="toggle('login')">login</button>
  </div>
</template>
<script>
import Login from './components/Login'
import Register from './components/Register'
export default {
  name: 'App',
  data(){
	  return {
		current: 'login',
		users: [],			
		message: ''
	  }
  },
  components: {
    Login,
	Register
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
</style>
