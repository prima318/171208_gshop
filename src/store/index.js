/*
vuex最核心的管理对象store
 */
import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutation from './mutation'
import getter from './getter'
import action from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  action,
  getter,
  mutation,
  state
})
