<script>
	export default {
		globalData: {
			userInfo: {}
		},
		onLaunch: function() {},
		onShow: function() {
			let _this = this
			uni.getUserInfo({
				provider: 'weixin',
				success: function(infoRes) {
					// console.log("全局获取用户信息：")
					// console.log(infoRes)
					_this.globalData.userInfo = infoRes.userInfo
				}
			});
		},
		onHide: function() {}
	};
</script>

<style>
</style>
