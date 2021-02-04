import app from '../src/app.js'
import config from 'config'
const port = config.get('port');

app.listen(`${port}`, () => {
	console.log(`node服务启动在${port}端口....`);
})

