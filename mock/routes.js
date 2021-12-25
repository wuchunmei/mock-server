const Router = require('koa-router');
const koaBody = require('koa-body')(); // 请求·方式 post 使用

const router = new Router({prefix: '/api'});

const user = require('./user');
const merchant = require('./merchant');
const member = require('./member');
const seat = require('./seat');

/* router.get('/', async(ctx, next) => {
    ctx.response.body = 'hello world'
});

router.post('/login', koaBody, async (ctx, next) => {
    let { account, password, captcha } = ctx.request.body;
    ctx.response.body = require('./login')(account, password, captcha);
});

router.post('/register', koaBody, async (ctx, next) => {
    let { account, password, captcha } = ctx.request.body;
    ctx.response.body = require('./register')(account, password, captcha);
})

router.post('/change/pwd', koaBody, async (ctx, next) => {
    let { account, password, captcha } = ctx.request.body;
    ctx.response.body = require('./register')(account, password, captcha);
}) */

// 用户模块
router.post('/login', koaBody, user.login);
router.get('/current-user', user.getUserInfo);
router.post('/sign-out', koaBody, user.signOut);

// 商户模块
router.get('/merchant', merchant.getList); // 获取商户

// 成员
router.get('/member', member.getList);

router.get('/seat', seat.getList);

module.exports = router;