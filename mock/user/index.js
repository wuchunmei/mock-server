/*
用户相关
*/

const lodash  = require('lodash');
const Mock = require('mockjs');
class User {
    // 登录
    async login (ctx, _) {
        const { account, password } = ctx.request.body;

        const af = account === 'account';
        const pf = password === '123456';

        let response = {};

        if (af && pf) {
            response = { success: true, message: 'OK', code: 0 }
        } else {
            response = { success: false, message: '账号或密码不正确', code: -1 }
        }
 
        ctx.response.body = response;
    }

    // 退出
    async signOut (ctx, _) {

        ctx.response.body = {
            success: true,
            message: '',
            data: {}
        }
    }

    // 获取用户信息
    async getUserInfo (ctx, _) {
        const data = Mock.mock({
            "name": "@name",
            "phone": "1388888999",
            "birthday": "@now('yyyy-MM-dd')",
            "gender|+1": [ '男', '女' ],
            "email": "@email",
            "age|22-80": 30,
            "userId": "@id",
            "addr": "@county(true)",
            "region": "@region",
            "avatar": 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        });

        ctx.response.body = {
            success: true,
            message: 'OK',
            data,
            code: 0
        };
    }

    //  更新用户
    async updateUser () {

    }
}

module.exports = new User();