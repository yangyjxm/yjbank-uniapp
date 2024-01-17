'use strict';
const db = uniCloud.database().collection('nav_page')
exports.main = async (event, context) => {
	const appid = 'wxa88115e813d1c9d8';
	const secret = 'a934255da1c34a19e6161f898dcf06f8';
	const apiUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
		'&js_code=' + event.js_code + '&grant_type=authorization_code';
	const res = await uniCloud.httpclient.request(apiUrl, {
		method: 'GET',
		data: {
			appid: 'wxa88115e813d1c9d8',
			secret: 'a934255da1c34a19e6161f898dcf06f8',
			js_code: event.js_code,
			grant_type: 'authorization_code'
		},
		contentType: 'json', // 指定以application/json发送data内的数据
		dataType: 'json' // 指定返回值为json格式，自动进行parse
		//返回数据给客户端
	});
	return res
}