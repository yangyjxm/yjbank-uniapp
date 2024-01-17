'use strict';
const db = uniCloud.database().collection('user')
exports.main = async (event, context) => {
	console.log('event', event)
	let response = await db.where({
		// openid: JSON.parse(event.body).openid
		openid: event.openid
	}).count()
	console.log('response', response)
	if (response.total != 0) {
		// 更新
		await db.where({
			openid: event.openid
		}).update({
			nickName: event.nickName,
			avatarUrl: event.avatarUrl
		})
	} else {
		await db.add(event)
	}
	//返回数据给客户端
	return response
};