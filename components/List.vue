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
import { Vue, Component, Watch } from 'nuxt-property-decorator';

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

    created() {
        this.itemList = this.$store.state.Todo.itemList;
    }
    initItem() {
        this.itemList = this.$store.state.Todo.itemList;
    }

    removeItem(id: number) {
        this.$store.commit('Todo/removeItem', id);
        this.initItem();
    }
    changeStatus(item: ItemList) {
        console.log(this.$route.params.status);
        this.$store.commit('Todo/changeStatus', item);
        this.initItem();
    }

    @Watch('$route.params.status')
    routeUpdate(newValue: string) {
        if (!newValue) {
            this.itemList = this.$store.state.Todo.itemList;
        } else if (newValue === 'yet') {
            this.itemList = this.$store.getters.Todo.setYet;
        } else {
            this.itemList = this.$store.getters.Todo.setClear;
        }
    }
}
</script>

<style scoped></style>
