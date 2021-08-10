import Vue from 'Vue'
import Vuex from 'Vuex'
import getters from './getters'
import app from './modules/app'

Vue.useContext(Vuex)

const store = new Vuex.Store({
    modules: {
        app
    },
    getters
})