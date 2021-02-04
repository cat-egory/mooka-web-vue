<template>
    <div>
        <div class="input-group" v-for="item in itemList">
            <span class="input-group-addon" id="basic-addon1">
                <input type="checkbox" :checked="item.status == 'clear'" />
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
import vue from 'vue';
import Component from 'vue-class-component';

interface ItemList {
    id: number;
    content: string;
    status: string;
}

@Component
export default class List extends vue {
    itemList: ItemList[] = [
        { id: 1, content: '씻기', status: 'clear' },
        { id: 2, content: '준비하기', status: 'clear' },
        { id: 3, content: '학교가기', status: 'clear' },
        { id: 4, content: '게임하기', status: 'yet' },
    ];

    create() {
        this.itemList = this.$store.state.itemList;
    }

    removeItem(id: number) {}
}
</script>

<style scoped></style>
