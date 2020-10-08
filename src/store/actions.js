import {
    ADD_COUNTER,
    ADD_TO_CAR
} from './mutations-types'

export default {
    addCar(context, payload) {
        return new Promise((resolve, reject) => {
            let oldproject = context.state.cartList.find(item => item.iid === payload.iid)

            if (oldproject) {
                context.commit(ADD_COUNTER, oldproject)
                resolve('商品加入购物车+1')
            } else {
                payload.count = 1
                context.commit(ADD_TO_CAR, payload)
                resolve('商品已加入购物车')
            }
        })
    }

}