<template>
    <div>
        <ol class="breadcrumb">
            <li><router-link to="/">모두</router-link></li>
            <li><router-link to="/clear">완료목록</router-link></li>
            <li class="active"><router-link to="/active">진행중</router-link></li>
        </ol>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped></style>
