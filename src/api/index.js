import Vue from 'vue'
const api = {}
api.timeout = { timeout: 20000 }
api.serverURL = 'your api server url'
api.asyncRequest = async (urlEnd, type, payload = {}) => {
  return await Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
}
export default api
