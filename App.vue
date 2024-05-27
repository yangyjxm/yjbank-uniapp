<script>
	import Vue from 'vue'
	export default {
		globalData: {
			userInfo: {
				openid: '',
				nickName: '',
				avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
			},
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: async function(e) {
					console.log(e)
					Vue.prototype.windowWidth = e.windowWidth;
					Vue.prototype.windowHeight = e.windowHeight;
				}
			})
		},
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
						console.log('openid：', res
							.result.data.openid)
						uniCloud.callFunction({
							name: 'getUser',
							data: {
								openid: res
									.result
									.data
									.openid
							}
						}).then(response => {
							if (response.result
								.data.length) {
								console.log(
									'已存在数据用户',
									response
									.result
									.data[
										0])
								getApp()
									.globalData
									.userInfo =
									response
									.result
									.data[0]
							} else {
								console.log(
									'新用户')
								getApp()
									.globalData
									.userInfo = {
										openid: res
											.result
											.data
											.openid,
										avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
										nickName: ''
									}
							}
						}).catch(err => {
							console.log('err',
								err)
						})
					}).catch(err => {
						console.log('err', err)
					})
				}
			});
		},
		onHide: function() {}
	};
</script>

<style>
</style>