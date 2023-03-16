const state = () => ({
	items: []
})

// getters
const getters = {
	selectedStandards: (state) => {
		return state.items;
	}
}

// actions
const actions = {
	addItemToStandards ({ state, commit }, standard) {
		commit('addItemToStandards', { standard })
	},
	removeItemFromStandards ({ state, commit }, standard) {
		commit('removeItemFromStandards', { standard })
	},
	clearStandards ({ state, commit }) {
		commit('clearStandards')
	},
	setSelectedStandards ({ state, commit }, standards) {
		commit('setSelectedStandards', { standards })
	}
}

// mutations
const mutations = {
	addItemToStandards (state, { standard }) {
		state.items.push(standard)
	},
	removeItemFromStandards (state, { standard }) {
		let index = state.items.indexOf(standard)
		state.items.splice(index, 1)
	},
	clearStandards(state) {
		state.items = []
	},
	setSelectedStandards(state, { standards }) {
		state.items = standards
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
