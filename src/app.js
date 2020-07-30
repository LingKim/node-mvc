import KOA from 'koa'
import Router from 'koa-router'

const app = new KOA();
const router = new Router();

router.get('/api', async (ctx, next) => {
	ctx.body = {
		name: "江湖人称李老板",
		age: "18"
	}
})

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => {
	console.log(`node服务启动在3000端口`);
})
