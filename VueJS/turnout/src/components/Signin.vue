<template>
	<div class="form-inline">
		<h3>Sign In</h3>
		<div class="form-group">
			<input 
				type="text"
				placeholder="email"
				class="form-control"
				v-model="email"
			/>
			<input
				type="password"
				placeholder="password"
				class="form-control"
				v-model="password"
			/>
			<button class="btn btn-primary">Sign In</button>
		</div>
	</div>
</template>

<script>
	import {firebaseApp} from '../firebaseApp'

	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn(){
				firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
			}
		}
	}
</script>