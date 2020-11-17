'use strict';
const db = uniCloud.database().collection('loan_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		total: unfinish
	} = await db.where({
		status: "0"
	}).count()
	let {
		total: doing
	} = await db.where({
		status: "3"
	}).count()
	let {
		total: finish
	} = await db.where({
		status: "1"
	}).count()
	//返回数据给客户端
	return {
		unfinish,
		doing,
		finish
	}
};
