export function formatDate(dateString, format = 'dd.MM.yyyy') {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return date.toLocaleDateString('ru-RU', options)
  }