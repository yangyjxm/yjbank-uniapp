'use strict';
const db = uniCloud.database()
const signupDb = db.collection('signup_info')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let getSignUp = await signupDb.get()
	//返回数据给客户端
	return getSignUp
};
