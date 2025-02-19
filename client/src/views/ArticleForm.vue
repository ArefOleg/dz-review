<template>
    <div>
      <h1>{{ isEdit ? 'Редактирование' : 'Создание' }} статьи</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Тип:</label>
          <select v-model="formData.type" required>
            <option value="news">Новость</option>
            <option value="review">Обзор</option>
            <option value="guide">Гайд</option>
          </select>
        </div>
  
        <div class="form-group">
          <label>Дата:</label>
          <input type="date" v-model="formData.date" required>
        </div>
  
        <button type="submit" class="button">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import articleApi from '../api/articles'
  import { formatDate } from '../utils/helpers'
  
  export default {
    props: {
      id: String
    },
    data() {
      return {
        formData: {
          type: 'news',
          date: new Date().toISOString().split('T')[0]
        }
      }
    },
    computed: {
      isEdit() {
        return !!this.id
      }
    },
    async created() {
      if (this.isEdit) {
        const article = await articleApi.get(this.id)
        this.formData = {
          ...article,
          date: formatDate(article.date, 'yyyy-MM-dd')
        }
      }
    },
    methods: {
      async submitForm() {
        try {
          if (this.isEdit) {
            await articleApi.update(this.id, this.formData)
          } else {
            await articleApi.create(this.formData)
          }
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select {
    padding: 8px;
    width: 200px;
  }
  
  .button {
    padding: 10px 20px;
    background: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>