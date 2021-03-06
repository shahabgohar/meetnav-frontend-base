import axios from 'axios'
const { v4: uuidv4 } = require('uuid')

class Api {
  jwt = null
  user = null
  baseUrl = process.env.API_ROOT
  sessionId = uuidv4()

  url (path) {
    if (this.baseUrl) {
      return this.baseUrl + path
    }
    return path
  }

  get headers () {
    const headers = {
    }
    if (this.jwt) {
      headers.Authorization = `Bearer ${this.jwt}`
    }
    return headers
  }

  async login (identifier, password) {
    const res = await axios.post(this.url('/auth/local'), { identifier, password })
    return res.data
  }

  async register (username, email, password) {
    await axios.post(this.url('/auth/local/register'), { username, email, password })
  }

  async createRoom (template) {
    const headers = this.headers
    const res = await axios.post(this.url('/nekos'), { template }, { headers })
    return res.data
  }

  async joinRoom (roomId) {
    const headers = this.headers
    const res = await axios.put(this.url(`/nekos/${roomId}`), { }, { headers })
    return res.data
  }

  async closeRoom (roomId) {
    const headers = this.headers
    const res = await axios.delete(this.url(`/nekos/${roomId}`), { headers })
    return res.data
  }

  async changeLanguage (lang) {
    const headers = this.headers
    const res = await axios.put(this.url('/users/' + this.user.id), { lang }, { headers })
    return res.data
  }

  async log (logEntry) {
    const headers = this.headers
    await axios.post(this.url('/logs'), { ...logEntry, source: 'client', session_id: this.sessionId }, { headers })
  }
}
const api = new Api()
export default api
