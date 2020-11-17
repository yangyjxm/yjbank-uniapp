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
					_this.globalData.userInfo = infoRes.userInfo
				}
			});
		},
		onHide: function() {}
	};
</script>

<style>
</style>
