import {
    request
} from './request'
//首页轮播图
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
//首页商品展示
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}