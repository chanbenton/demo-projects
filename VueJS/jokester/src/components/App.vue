<template>
	<div id="app">
		Got jokes?
		<button class="btn btn-primary" @click="initJokes">
		Add 10 random jokes</button><br><br>
		
		<div class="container">
			<div class="row form-group">
				<Joke 
					v-for="(joke, index) in $store.state.jokes"
					:joke="joke"
					key="index" 
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import Joke from './Joke.vue'

	export default{
		methods: mapActions([
			'initJokes'
		]),
		components:{
			Joke
		}
	}
</script>