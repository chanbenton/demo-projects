<template>
	<div class="">
		<h3>Events Dashboard</h3><br>
		<button class="btn btn-danger btn-sm signout-btn"  @click="signOut">Sign Out</button><br>
		<hr>
		<AddEvent />
		<hr>
		<div class="container">
			<div class="row">
				<EventItem
					v-for="(event_item, index) in this.$store.state.events"
					:event="event_item"
					key="index"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
	methods: {
		signOut(){
			this.$store.dispatch('signOut')
			firebaseApp.auth().signOut()
		}
	},

	components: {
		AddEvent,
		EventItem
	},
	mounted(){
		eventsRef.on('value', snap => {
			let events = []
			snap.forEach(event => {
				events.push(event.val())
			})
			this.$store.dispatch('setEvents', events)
		})
	}
}
</script>