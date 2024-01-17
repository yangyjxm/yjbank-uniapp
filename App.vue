<script>
	export default {
		globalData: {
			userInfo: {
				openid: '',
				nickName: '',
				avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
			},
		},
		onLaunch: function() {},
		onShow: function() {
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log('loginRes', loginRes)
					let js_code = loginRes.code
					uniCloud.callFunction({
						name: 'getOpenid',
						data: {
							js_code
						}
					}).then(res => {
						console.log('res', res)
						console.log('openid', res.result.data.openid)
						uniCloud.callFunction({
							name: 'getUser',
							data: {
								openid: res.result.data.openid
							}
						}).then(response => {
							console.log('response', response)
							if (response.result.data.length) {
								console.log('用户已存在读取数据', response.result.data[0])
								getApp().globalData.userInfo = response.result
									.data[0]
							} else {
								console.log('新用户')
								getApp().globalData.userInfo = {
									openid: res.data.openid,
									avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
									nickName: ''
								}
							}
						}).catch(err => {
							console.log('err', err)
						})
					}).catch(err => {
						console.log('err', err)
					})
					// 	uni.request({
					// 		method: 'GET',
					// 		url: 'https://api.weixin.qq.com/sns/jscode2session',
					// 		data: {
					// 			appid: 'wxa88115e813d1c9d8',
					// 			secret: 'a934255da1c34a19e6161f898dcf06f8',
					// 			js_code,
					// 			grant_type: 'authorization_code'
					// 		},
					// 		success: res => {
					// 			console.log('res', res)
					// 			console.log('openid', res.data.openid)
					// 			uniCloud.callFunction({
					// 				name: 'getUser',
					// 				data: {
					// 					openid: res.data.openid
					// 				}
					// 			}).then(response => {
					// 				console.log('response', response)
					// 				if (response.result.data.length) {
					// 					console.log('用户已存在读取数据', response.result.data[0])
					// 					getApp().globalData.userInfo = response.result
					// 						.data[0]
					// 				} else {
					// 					console.log('新用户')
					// 					getApp().globalData.userInfo = {
					// 						openid: res.data.openid,
					// 						avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
					// 						nickName: ''
					// 					}
					// 				}
					// 			}).catch(err => {
					// 				console.log('err', err)
					// 			})
					// 		}
					// 	})
				}
			});
			// 检测是否已获取用户信息
			// console.log('检测')
			// console.log(getApp().globalData.userInfo)
			// if (getApp().globalData.userInfo) {
			// 	console.log('用户昵称:' + getApp().globalData.userInfo.nickName)
			// } else {
			// 	console.log("尚未获得用户授权，无法取得用户信息。")
			// 	uni.redirectTo({
			// 		url: '/pages/login/login'
			// 	})
			// }
			// uni.getUserProfile({
			// 	desc: '检查是否已获取用户信息',
			// 	lang: 'zh_CN',
			// 	success(infoRes) {
			// 		// console.log("全局获取用户信息：")
			// 		console.log('用户昵称:' + this.globalData.userInfo.nickName)
			// 		// this.globalData.userInfo = infoRes.userInfo
			// 		// this.globalData.userInfo.signature = infoRes.signature
			// 	},
			// 	fail() {
			// 		console.log("尚未获得用户授权，无法取得用户信息。")
			// 		uni.reLaunch({
			// 			url: '/pages/login/login'
			// 		})
			// 	}
			// });
		},
		onHide: function() {}
	};
</script>

<style>
</style>