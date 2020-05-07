<template>
  <div class="card card-todo hover-pointer" @click="$bvModal.show('modal-todo')">
    <div class="card-body">
      <h5 class="card-title">
        {{ dataTodo.title }}
      </h5>
      <span class="badge badge-secondary text-uppercase">
        FRONTEND
      </span>
    </div>
    <div class="card-footer">
      <p class="left-text">
        <b-icon icon="check-box" /> 2
      </p>
      <div class="right-icon">
        <div class="rounded-circle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTodo',
  props: {
    dataTodo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
