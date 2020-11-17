'use strict';
const db = uniCloud.database().collection('loan_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let data = await db.orderBy("createTime", "asc").get()
	//返回数据给客户端
	return data
};
