'use strict';
const db = uniCloud.database().collection('message_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
<<<<<<< HEAD
	let data = await db.orderBy("createTime", "desc").get()
	//返回数据给客户端
	return data
=======
	let data = await db.orderBy("createTime", "desc").limit(event.pageSize).skip(event.pageNum * event.pageSize)
		.get()
	let count = await db.count()
	//返回数据给客户端
	return {
		count: count,
		...data
	}
>>>>>>> 7932bbddaf77bfb80ad6ff7fecd16997e1336fb0
};
