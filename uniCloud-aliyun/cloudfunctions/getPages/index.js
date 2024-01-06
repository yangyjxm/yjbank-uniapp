'use strict';
const db = uniCloud.database().collection('nav_page')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let data = await db.where({
		sortId: JSON.parse(event.body).sortId
	}).orderBy("createTime", "desc").get()
	//返回数据给客户端
	return data
};
