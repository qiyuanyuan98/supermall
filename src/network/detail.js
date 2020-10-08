import {
    request
} from './request'

//获取详情页的iid相关数据
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid,
        }
    })
}

//请求推荐recommend
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

//商品基本信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.desc = itemInfo.desc;
        this.lowPrice = itemInfo.lowPrice;
        this.discount = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.realPrice;
    }
}

//商铺信息
export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
    }
}

//参数信息
export class Param {
    constructor(info, rule) {
        this.info = info.set;
        this.rule = rule.tables;
    }
}