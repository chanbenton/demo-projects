<template>
	<div id="app">

		<span>Got jokes?</span><br>
		<button class="btn btn-primary" @click="initJokes">
		Add 10 random jokes</button>
		<button class="btn btn-primary" @click="addJoke">
		Add 1 random joke</button>
		
		<br>
			<span v-for="type in types">
				<input 
					type="checkbox" 
					:value="type"
					v-model="checkedTypes"checked>
				<label>{{type}}</label>&nbsp;
			</span>
		<br>
		
		<div class="container">
		 	<div class="row form-group">
				<Joke 
					v-for="(joke, index) in $store.state.jokes"
					v-show="checkedTypes.includes(joke.type)"
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
		data(){
			return {
				types: ['general', 'knock-knock', 'programming'],
				checkedTypes: ['general', 'knock-knock', 'programming']
			}
		},
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