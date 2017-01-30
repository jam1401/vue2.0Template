/**
 * Created by jeffreymorgan on 1/29/17.
 */
import api from '../api'

export const increment = ({ commit }) => {
  commit('INCREMENT')
}
export const decrement = ({ commit }) => {
  commit('DECREMENT')
}

export const exampleCallApi = async ({ commit }, payload) => {
  const urlEnd = '/example/apiurl'
  const type = 'post'
  const resp = await api.asyncRequest(urlEnd, type, payload)
  return resp
}
