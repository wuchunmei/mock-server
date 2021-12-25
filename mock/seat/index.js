
/*
    座位
*/

const Mock = require('mockjs');

class Seat {
    async getList (ctx, _) {
        const data = Mock.mock({
            "data|20": [
                {
                    key: '@id',
                    id: '@id',
                    creator: '@cname',
                    name: '@cname',
                    'status|+1': ['on', 'free'],
                    // 'role|+1': ['admin', 'normal'],
                    // phone: '18868888888',
                    createdAt: '@date',
                    price: '@float(300, 2800, 0, 2)'
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

module.exports = new Seat;