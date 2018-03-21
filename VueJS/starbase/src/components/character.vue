<template>
	<div id="">
		{{character}}
	</div>
</template>

<script>

export default{
	data(){
		return{
			character:{}
		}
	},
  	methods: {
    	fetchCharacter(){
      		fetch('https://swapi.co/api/people/1', {
        	mode: 'cors',
        	method: 'GET'
      	})
        	.then(response => response.json())
        	.then(json => this.character =  json)
    }
  },
  created() {
    this.fetchCharacter()
  }
}
</script>