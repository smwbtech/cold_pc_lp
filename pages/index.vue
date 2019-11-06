<template>
	<div class="container">
		<FirstDisplay />
		<ApplicationDisplay />
		<ModelsDisplay />
	</div>
</template>

<script>
import FirstDisplay from '@/components/first-display/FirstDisplay.vue';
import ApplicationDisplay from '@/components/application-display/ApplicationDisplay.vue';
import ModelsDisplay from '@/components/models-display/ModelsDisplay.vue';

import { getToken } from '@/assets/js/api/getToken.js';
import { getItems } from '@/assets/js/api/getItems.js';

export default {
	components: {
		FirstDisplay,
		ApplicationDisplay,
		ModelsDisplay
	},

	async fetch({ store }) {
		const token = await getToken();
		const items = await getItems(token);
		store.commit('setModels', items);
	}
};
</script>

<style></style>
