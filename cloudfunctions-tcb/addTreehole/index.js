'use strict';
const db = uniCloud.database()
const treeholeDb = db.collection('treehole_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let addTreehole = await treeholeDb.add(event)
	//返回数据给客户端
	return event
};
