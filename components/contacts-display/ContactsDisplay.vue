<template>
	<section class="contacts">
		<ContactUs />
		<OurAdvantages />
		<ContactsFooter />
	</section>
</template>
<script>
import ContactUs from './ContactsDisplayContactUs.vue';
import OurAdvantages from './ContactsDisplayAdvantages.vue';
import ContactsFooter from './ContactsDisplayFooter.vue';
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';
export default {
	components: {
		ContactUs,
		OurAdvantages,
		ContactsFooter
	},
	mixins: [IntersectionMixin],
	data() {
		return {
			sectionName: 'модели',
			isVisible: false,
			intersectionOptions: {
				threshold: 0.3
			}
		};
	}
};
</script>
<style scoped>
.contacts {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	min-height: 100vh;
	padding: 0px
		calc(var(--side-padding) + var(--column) * 2 + var(--gutter) * 2);
	padding-top: var(--row);
}
</style>
