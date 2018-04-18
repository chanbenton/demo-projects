<template>
	<div class="">
		<h3>Events Dashboard</h3><br>
		<button class="btn btn-danger btn-sm signout-btn"  @click="signOut">Sign Out</button><br>
		{{$store.state}}
	</div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

export default {
	methods: {
		signOut(){
			this.$store.dispatch('signOut')
			firebaseApp.auth().signOut()
		}
	}
}
</script>