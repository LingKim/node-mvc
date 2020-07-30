class ListController {
	constructor () {
	}
	
	async getList (ctx) {
		// console.log(ctx);
		try {
			ctx.body = {
				code: 200,
				msg: "获取列表成功..."
			}
		} catch (e) {
			console.log(e);
		}
	}
}

export default new ListController();