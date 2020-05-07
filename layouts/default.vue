<template>
  <main class="main-body">
    <navbar-app />
    <nuxt class="wrapper" />
  </main>
</template>

<script>
import NavbarApp from '@/components/Navbar/NavbarApp'

export default {
  components: {
    NavbarApp
  },
  computed: {
    dataList () {
      const list = ['Design task', 'Halcyon Website', 'Onboarding materials', 'Marketing']
      const data = []
      list.forEach((element) => {
        data.push({
          name: element,
          slug: this.$options.filters.changeToSlug(element)
        })
      })
      return data
    }
  }
}
</script>
