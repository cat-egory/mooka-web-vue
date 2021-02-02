<template>
    <div class="full_wrap">
        <Header></Header>
        <List></List>
    </div>
</template>

<script lang="ts">
import List from '@/components/List.vue';
import Header from '~/components/Header.vue';
// import Create from '~/components/Create.vue';
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
    components: {
        List,
        Header,
        // Create,
    },
})
export default class Index extends Vue {}
</script>

<style scoped></style>
