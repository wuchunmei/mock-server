
/*
    商户相关
*/

// import Mock from 'mockjs';
/* import {
    range as _range,
    random as _random
} from 'lodash'; */
const lodash = require('lodash');

const valueEnum = {
    0: 'close',
    1: 'open',
    2: 'reset',
    3: 'error',
}

const creators = ['菩提老祖', '黑山老妖', '光头强', '熊大', '熊二'];

class Merchant {
    async getList(ctx, next) {
        // 获取列表数据

        const { page = 1, limit = 20 } = ctx.query;

        const data = lodash.range(1, 20).map(m => ({
            key: m,
            name: `Merchant_${m}`,
            creator: creators[Math.floor(Math.random() * creators.length)],
            status: valueEnum[Math.floor(Math.random() * 10) % 4],
            createdAt: Date.now() - Math.floor(Math.random() * 100000),
            memo: m % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案'
        }));

        ctx.response.body = {
            total: 60,
            success: true,
            code: 0,
            data: data,
            message: 'OK'
        } 
    }

    async createMerchant (ctx, next) {
        // 创建商户
    }
}

module.exports = new Merchant();