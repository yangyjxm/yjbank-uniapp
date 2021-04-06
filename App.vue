<script>
	export default {
		globalData: {
			userInfo: {}
		},
		onLaunch: function() {},
		onShow: function() {
			// let _this = this
			// console.log('onShow')
			// console.log(getApp().globalData.userInfo)
			// uni.getUserProfile({
			// 	desc : '用于完善用户资料',
			// 	lang : 'zh_CN',  
			// 	success: function(infoRes) {
			// 		console.log("全局获取用户信息：")
			// 		console.log(infoRes)
			// 		_this.globalData.userInfo = infoRes.userInfo
			// 		_this.globalData.userInfo.signature = infoRes.signature
			// 	},
			// 	fail() {
			// 		console.log("未获得用户授权，无法取得用户信息！")
			// 	}
			// });
		},
		onHide: function() {}
	};
</script>

<style>
</style>
