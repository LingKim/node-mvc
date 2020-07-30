/**
 * 登录模块
 */
class LoginRouter {
	constructor () {
	}
	
	/**
	 *
	 * @returns {Promise<void>}
	 * @param {string} userName
	 * @param {number} password
	 */
	async userLogin(ctx) {
		const { body }  = ctx.request;
		try {
			ctx.body = {
				code:200,
				msg:"登录成功",
				result:body
			};
		}catch (e) {
			console.log(e);
		}
	}
	
	async userForget(ctx) {
		try {
			ctx.body = {
				code:200,
				msg:"忘记密码"
			};
		} catch (e) {
			console.log(e);
		}
	}
}



export default new LoginRouter();