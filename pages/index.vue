<template>
	<div class="container">
		<FirstDisplay />
		<ApplicationDisplay />
		<div class="wrapper">
			<ModelsDisplay />
			<ContactsDisplay />
		</div>
	</div>
</template>

<script>
import FirstDisplay from '@/components/first-display/FirstDisplay.vue';
import ApplicationDisplay from '@/components/application-display/ApplicationDisplay.vue';
import ModelsDisplay from '@/components/models-display/ModelsDisplay.vue';
import ContactsDisplay from '@/components/contacts-display/ContactsDisplay.vue';

import { getToken } from '@/assets/js/api/getToken.js';
import { getItems } from '@/assets/js/api/getItems.js';

export default {
	components: {
		FirstDisplay,
		ApplicationDisplay,
		ModelsDisplay,
		ContactsDisplay
	},

	async fetch({ store }) {
		const token = await getToken();
		const items = await getItems(token);
		store.commit('setModels', items);
	}
};
</script>

<style scpped>
.wrapper {
	background-image: url('/img/bg.jpg');
	background-repeat: no-repeat;
	background-position: 0% 0%;
	background-color: var(--dark-blue);
}
</style>
