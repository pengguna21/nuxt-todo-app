<template>
  <nav class="navbar navbar-board">
    <div class="navbar-brand">
      <h5 class="title">
        Product Design Team
      </h5>
      <span class="badge badge-primary">Sprint 8</span>
    </div>

    <ul class="navbar-nav">
      <li class="nav-item active">
        <nuxt-link to="/" class="new-member">
          <i class="fa fa-plus" />
          New Member
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarBoard'
}
</script>
