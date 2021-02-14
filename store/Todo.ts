import { Module, VuexMutation, Getter, VuexModule } from 'nuxt-property-decorator';

interface ItemList {
    id: number;
    content: string;
    status: string;
}

@Module({ stateFactory: true })
export default class Todo extends VuexModule {
    itemList: ItemList[] = [
        { id: 1, content: '씻기', status: 'clear' },
        { id: 2, content: '준비하기', status: 'clear' },
        { id: 3, content: '학교가기', status: 'clear' },
        { id: 4, content: '게임하기', status: 'yet' },
    ];

    //아이템 추가 Mutation
    @VuexMutation
    addItem(item: ItemList) {
        this.itemList.push(item);
    }
    //해당 아이템 제거 Mutation
    @VuexMutation
    removeItem(id: number) {
        const idx = this.itemList.findIndex(function(param) {
            return param.id === id;
        });
        this.itemList.splice(idx, 1);
    }
    //해당 아이템 status 변경
    @VuexMutation
    changeStatus(item: ItemList) {
        const idx = this.itemList.findIndex(function(param) {
            return param.id === item.id;
        });
        if (item.status === 'yet') {
            this.itemList[idx].status = 'clear';
        } else {
            this.itemList[idx].status = 'yet';
        }
    }

    get setYet() {
        const yetList = this.itemList.filter((item: ItemList) => item.status === 'yet');
        console.log('yetList', yetList);
        return yetList;
    }

    get setClear() {
        return this.itemList.filter((item: ItemList) => item.status === 'clear');
    }
}
