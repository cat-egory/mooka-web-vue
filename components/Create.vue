<template>
    <div>
        <input type="text" class="input" v-model="content" @keyup.enter="addItem"></input>
        <button type="button" class="btn" @click="addItem">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Create extends Vue {
    content: string = '';

    addItem() {
      new Promise((resolve, reject) => {
        this.$store.commit('Todo/addItem', {
            id: this.$store.state.Todo.itemList.length + 1,
            content: this.content,
            status: 'yet',
        })
      this.content = ''
      })
    }
}
</script>

<style scoped></style>
