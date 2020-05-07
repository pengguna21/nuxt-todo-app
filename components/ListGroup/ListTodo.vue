<template>
  <div id="contentListTodo" class="list-todo">
    <div class="list-content">
      <div class="list-header">
        <div class="list-title">
          <h5 class="title">
            {{ dataList.title }}
          </h5>
          <button class="btn btn-gray">
            {{ dataList.items.length }}
          </button>
        </div>
        <div class="btn-toolbar">
          <button class="btn btn-gray">
            <i class="fa fa-plus" />
          </button>
          <b-dropdown variant="gray" right no-caret>
            <template v-slot:button-content>
              <i class="fa fa-ellipsis-h" />
            </template>
            <b-dropdown-item href="#">
              Action
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="list-body">
        <client-only>
          <draggable
            :list="dataList.items"
            v-bind="draggableOptions"
          >
            <card-todo
              v-for="(item, index) in dataList.items"
              :key="index"
              :data-todo="item"
            />
          </draggable>
        </client-only>
      </div>
      <div class="list-footer">
        <p class="mb-0 hover-pointer">
          Add a card...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CardTodo from '@/components/Card/CardTodo'

export default {
  name: 'ListTodo',
  components: {
    CardTodo
  },
  props: {
    dataList: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      draggableOptions: {
        group: 'tasks-todo',
        animation: 200,
        ghostClass: 'draggable',
        tag: 'div'
      }
    }
  },
  mounted () {
    const element = document.getElementById('contentListTodo')
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
