export const state = () => {
	return {
		currentSection: 'Главный экран'
	};
};

export const mutations = {
	setCurrentSection(state, payload) {
		state.currentSection = payload;
	}
};
