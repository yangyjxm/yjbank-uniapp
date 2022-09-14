<script>
	export default {
		globalData: {
			userInfo: {}
		},
		onLaunch: function() {},
		onShow: function() {
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
