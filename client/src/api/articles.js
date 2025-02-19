import axios from 'axios'

const API_URL = 'http://localhost:5000/api/articles'

export default {
  async getAll() {
    const response = await axios.get(API_URL)
    return response.data
  },

  async create(article) {
    return await axios.post(API_URL, article)
  },

  async update(id, article) {
    return await axios.put(`${API_URL}/${id}`, article)
  },

  async delete(id) {
    return await axios.delete(`${API_URL}/${id}`)
  }
}
