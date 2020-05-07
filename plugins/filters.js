import Vue from 'vue'

Vue.filter('changeToSlug', (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
  value = value.toLowerCase()
  value = value.replace(' ', '-')
  return value
})
