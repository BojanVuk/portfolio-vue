import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        modal: {
            code: '',
            visible: false,
            message: ''
        },
        loading: false
    },
    getters: {
        isModalVisible: state => {
            return state.modal.visible
        },
        modalCode: state => {
            return state.modal.code
        },
        modalMessage: state => {
            return state.modal.message
        },
        isLoading: state => {
            return state.loading
        }
    },
    mutations: {
        'SET_MODAL'(state, modal) {
            state.modal = modal
        },
        'SET_LOADING'(state, loading = false) {
            state.loading = loading
        }
    }
})

export default store;