<template>
    <div>
        <div class="input-group" v-for="item in itemList">
            <span class="input-group-addon" id="basic-addon1">
                <input
                    type="checkbox"
                    :checked="item.status == 'clear'"
                    @change="changeStatus(item)"
                />
            </span>
            <input type="text" class="form-control" :value="item.content" />
            <span class="input-group-btn1"
                ><button type="button" class="btn btn-info" @click="removeItem(item.id)">
                    x
                </button></span
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface ItemList {
    id: number;
    content: string;
    status: string;
}

@Component
export default class List extends Vue {
    itemList: ItemList[] = [];
    mounted() {
        console.log('here');
    }
}
</script>

<style scoped></style>
