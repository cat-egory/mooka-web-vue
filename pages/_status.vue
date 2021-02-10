<template>
    <div class="full_wrap">
        <Header></Header>
        <List></List>
        <Create></Create>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '~/components/List.vue';
import Header from '~/components/Header.vue';
import Create from '~/components/Create.vue';
import Footer from '~/components/Footer.vue';
import { Component } from 'nuxt-property-decorator';

@Component({
    components: {
        List,
        Header,
        Create,
        Footer,
    },
})
export default class Index extends Vue {}
</script>

<style scoped>
.full_wrap {
    padding: 100px;
}
</style>
