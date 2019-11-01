export default {
	mounted() {
		const observer = new IntersectionObserver(
			this.visibilityObserver,
			this.intersectionOptions
		);
		observer.observe(this.$el);
	},

	methods: {
		visibilityObserver(entries, observer) {
			entries.forEach((entry) => {
				this.isVisible = entry.isIntersecting;
				if (entry.isIntersecting) {
					this.$store.commit('setCurrentSection', this.sectionName);
				}
			});
		}
	}
};
