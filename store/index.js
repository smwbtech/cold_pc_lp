export const state = () => {
	return {
		currentSection: 'Главный экран',
		models: []
	};
};

export const mutations = {
	setCurrentSection(state, payload) {
		state.currentSection = payload;
	},
	setModels(state, payload) {
		state.models.push(...payload);
	}
};
