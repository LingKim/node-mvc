import combineRoutes from 'koa-combine-routers'

import ListRouter from './listRouter'
import LoginRouter from './loginRouter'

export default combineRoutes(ListRouter,LoginRouter);