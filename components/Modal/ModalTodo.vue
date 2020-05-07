<template>
  <b-modal
    id="modal-todo"
  >
    <template v-slot:modal-header="{ close }">
      <h5>{{ todoActived }}</h5>
      <button class="close" @click="close()">
        <b-icon icon="x" />
      </button>
    </template>

    <p class="my-4">
      Hello from modal!
    </p>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalTodo',
  computed: {
    ...mapState({
      todoActived: state => state.todo.actived
    })
  }
}
</script>
