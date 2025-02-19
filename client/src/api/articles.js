import axios from 'axios'

const API_BASE_URL = process.env.VUE_APP_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  // Статьи
  async getAllArticles() {
    const response = await apiClient.get('/articles')
    return response.data
  },

  async getArticleById(id) {
    const response = await apiClient.get(`/articles/${id}`)
    return response.data
  },

  async createArticle(articleData) {
    const response = await apiClient.post('/articles', articleData)
    return response.data
  },

  async updateArticle(id, articleData) {
    const response = await apiClient.put(`/articles/${id}`, articleData)
    return response.data
  },

  async deleteArticle(id) {
    await apiClient.delete(`/articles/${id}`)
  },

  // Блоки
  async getArticleBlocks(articleId) {
    const response = await apiClient.get(`/articles/${articleId}/blocks`)
    return response.data
  },

  async addBlockToArticle(articleId, blockData) {
    const response = await apiClient.post(`/articles/${articleId}/blocks`, blockData)
    return response.data
  },

  // Изображения
  async getArticleImages(articleId) {
    const response = await apiClient.get(`/articles/${articleId}/images`)
    return response.data
  },

  async addImageToArticle(articleId, imageData) {
    const formData = new FormData()
    formData.append('image', imageData.file)
    formData.append('path', imageData.path)

    const response = await apiClient.post(
      `/articles/${articleId}/images`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    return response.data
  },

  // Вспомогательные методы
  async searchArticles(params) {
    const response = await apiClient.get('/articles/search', { params })
    return response.data
  }
}