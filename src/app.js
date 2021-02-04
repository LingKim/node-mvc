import KOA from 'koa'
import helmet from 'koa-helmet'
import koaBody from "koa-body";
import cors from '@koa/cors'
import compose from "koa-compose";
import routes from './routes/index'

const app = new KOA();

const middleware = compose([
	koaBody(),
	helmet(),
	cors()
])

app.use(middleware)
app.use(routes())

app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
})

export default app


