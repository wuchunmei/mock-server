
/*
    商品
*/

const Mock = require('mockjs');

const valueEnum = {
    0: 'on',
    1: 'leave',
}

class Member {
    async getList (ctx, _) {
        const data = Mock.mock({
            "data|20": [
                {
                    key: '@id',
                    id: '@id',
                    creator: '@cname',
                    name: '@cname',
                    'status|+1': ['on', 'leave'],
                    // 'role|+1': ['admin', 'normal'],
                    // phone: '18868888888',
                    createdAt: '@date'
                }
            ]
            
        });

        ctx.response.body = {
            success: true,
            message: 'OK',
            ...data,
        }
    }
}

module.exports = new Member;