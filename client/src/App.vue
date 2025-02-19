<template>
  <div class="app">
    <nav>
      <router-link to="/">Список статей</router-link>
      <router-link to="/create">Создать статью</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./styles/main.css"></style>