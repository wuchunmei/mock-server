const Koa = require('koa');
// const router = require('koa-router')();
// const koaBody = require('koa-body')(); //   请求·方式 post 使用

const router = require('./routes');

// const { router } = require('./router/index');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();

});

app.use(router.routes());

app.listen(8001);

console.log('app start at port 8001');