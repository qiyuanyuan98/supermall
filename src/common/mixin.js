import {
    debounce
} from '../common/utils.js'

import BackTop from "../components/content/backtop/BackTop";

export const itemListenerMinxin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        //监听GoodsListItem发出的事件
        const refresh = debounce(this.$refs.scroll.refresh);
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on("imgisload", this.itemImgListener);
    },
}

// export const backTopMixin = {
//     components: {
//         BackTop
//     },
//     data() {
//         return {
//             isShow: false
//         }
//     },
//     methods: {
//         //版回顶部的点击事件
//         backtopclick() {
//             this.$refs.scroll.scrollTo(0, 0, 500);
//         },
//     },
// }

import {
    POP,
    NEW,
    SELL
} from "./const";

export const tabControlMixin = {
    data: function() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = POP
                    break
                case 1:
                    this.currentType = NEW
                    break
                case 2:
                    this.currentType = SELL
                    break
            }
            // console.log(this.currentType);
        }
    }
}