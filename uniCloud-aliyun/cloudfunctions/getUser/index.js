'use strict';
const db = uniCloud.database().collection('user')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event', event)
	let data = await db.where({
		// openid: JSON.parse(event.body).openid
		openid: event.openid
	}).get()
	//返回数据给客户端
	return data
};