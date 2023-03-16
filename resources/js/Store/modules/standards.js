const state = () => ({
	items: []
})

// getters
const getters = {
	cartProducts: (state) => {
		return state.items;
	}
}

// actions
const actions = {
	addItemToStandards ({ state, commit }, standard) {
		commit('addItemToStandards', { standard })
	},
	removeItemFromStandards ({ state, commit }, index) {
		commit('removeItemFromStandards', { index })
	}
}

// mutations
const mutations = {
	addItemToStandards (state, { standard }) {
		state.items.push(standard)
	},
	removeItemFromStandards (state, { index }) {
		state.item.splice(index, 1)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
