import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from '../views/ArticlesList.vue'
import ArticleForm from '../views/ArticleForm.vue'

const routes = [
  {
    path: '/',
    name: 'ArticlesList',
    component: ArticlesList
  },
  {
    path: '/create',
    name: 'ArticleCreate',
    component: ArticleForm
  },
  {
    path: '/edit/:id',
    name: 'ArticleEdit',
    component: ArticleForm,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router