<template>
  <section class="board">
    <navbar-board class="board-navbar" />
    <navbar-helper class="board-helper" />
    <div class="board-main">
      <list-todo
        v-for="(item, index) in dataLists"
        :key="index"
        :data-list="item"
      />
    </div>
    <modal-todo />
  </section>
</template>

<script>
import NavbarBoard from '@/components/Navbar/NavbarBoard'
import NavbarHelper from '@/components/Navbar/NavbarHelper'
import ListTodo from '@/components/ListGroup/ListTodo'
import ModalTodo from '@/components/Modal/ModalTodo'

import { dataLists } from '@/constant/dataList'

export default {
  components: {
    NavbarBoard, NavbarHelper, ListTodo, ModalTodo
  },
  data () {
    return {
      dataLists
    }
  }
}
</script>
