<template>
    <div class="container">
        <List></List>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '@/components/List.vue';
import Component from 'vue-class-component';

@Component({
    components: {
        List,
    },
})
export default class index extends Vue {}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
