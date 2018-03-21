<template>
	<div id="">
		{{character}}
	</div>
</template>

<script>

export default{
	props: ['id'],
	data(){
		return{
			character:{}
		}
	},
  	methods: {
    	fetchCharacter(id){
      		fetch(`https://swapi.co/api/people/${id}`, {
        	mode: 'cors',
        	method: 'GET'
      	})
        	.then(response => response.json())
        	.then(json => this.character =  json)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>