'use strict';
const db = uniCloud.database()
const treeholeDb = db.collection('treehole_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let getTreehole = await treeholeDb.orderBy("time", "desc").limit(event.pageSize).skip(event.pageNum * event.pageSize)
		.get()
	let count = await treeholeDb.count()
	//返回数据给客户端
	return {
		count: count,
		...getTreehole
	}
};
