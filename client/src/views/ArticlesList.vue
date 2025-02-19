<template>
  <div>
    <h1>Список статей</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <div v-for="article in articles" :key="article.id" class="article-item">
        <h3>{{ article.type }} - {{ formatDate(article.date) }}</h3>
        <div>
          <button @click="editArticle(article.id)" class="button edit-btn">Редактировать</button>
          <button @click="deleteArticle(article.id)" class="button delete-btn">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleApi from '../api/articles'
import { formatDate } from '../utils/helpers'

export default {
  data() {
    return {
      articles: [],
      loading: true
    }
  },
  async created() {
    await this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      try {
        this.articles = await articleApi.getAll()
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async deleteArticle(id) {
      if (confirm('Вы уверены?')) {
        await articleApi.delete(id)
        await this.fetchArticles()
      }
    },
    editArticle(id) {
      this.$router.push(`/edit/${id}`)
    },
    formatDate
  }
}
</script>