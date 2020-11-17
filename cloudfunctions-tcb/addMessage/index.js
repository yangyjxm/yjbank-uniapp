'use strict';
const db = uniCloud.database().collection('message_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let data = await db.add(event)
	//返回数据给客户端
	return event
};
