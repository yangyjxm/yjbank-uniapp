'use strict';
const db = uniCloud.database().collection('loan_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
<<<<<<< HEAD
	let data = await db.orderBy("createTime", "asc").get()
=======
	let data = await db.orderBy("createTime", "desc").where({
		status: event.status
	}).get()
>>>>>>> 7932bbddaf77bfb80ad6ff7fecd16997e1336fb0
	//返回数据给客户端
	return data
};
