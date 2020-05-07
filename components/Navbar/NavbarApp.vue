<template>
  <nav class="navbar navbar-app">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">
          <div class="media">
            <b-icon icon="window" class="icon" />
            <span>Project</span>
          </div>
        </nuxt-link>
      </li>
      <li class="nav-item active">
        <nuxt-link to="/" class="nav-link">
          <div class="media">
            <b-icon icon="grid" class="icon" />
            <span class="title">Board</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarApp'
}
</script>
