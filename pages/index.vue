<template>
	<div class="container">
		<FirstDisplay />
		<ApplicationDisplay />
	</div>
</template>

<script>
import FirstDisplay from '@/components/first-display/FirstDisplay.vue';
import ApplicationDisplay from '@/components/application-display/ApplicationDisplay.vue';

export default {
	components: {
		FirstDisplay,
		ApplicationDisplay
	}
};
</script>

<style></style>
