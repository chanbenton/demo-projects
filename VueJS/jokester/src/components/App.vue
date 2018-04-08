<template>
	<div id="app">

		Got jokes?
		<button class="btn btn-primary" @click="initJokes">
		Add 10 random jokes</button>
		<button class="btn btn-primary" @click="addJoke">
		Add 1 random joke</button><br><br>
		
		<div class="container">
		 	<div class="row form-group">
				<Joke 
					v-for="(joke, index) in $store.state.jokes"
					:joke="joke"
					:index="index"
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
			'initJokes',
			'addJoke',
			'delJoke'
		]),
		components:{
			Joke
		}
	}
</script>