// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
	const wxContext = cloud.getWXContext()
	const {
		templateId,
		character,
		name
	} = event
	try {
		const result = await cloud.openapi.subscribeMessage.send({
			touser: wxContext.OPENID,
			templateId: "tTskOIT7RycCenrNcXrQQDT9HDqIhVvipgNQKBcAC5E",
			miniprogramState: 'developer',
<<<<<<< HEAD
			page: "/pages/home/index/index",
=======
			page: "/pages/home/index",
>>>>>>> 7932bbddaf77bfb80ad6ff7fecd16997e1336fb0
			lang: 'zh_CN',
			data: {
				thing2: {
					value: "测试测试"
				},
				time3: {
					value: "2019年10月1日 15:01"
				}
			}
		})
		return result
	} catch (err) {
		return err
	}

}
