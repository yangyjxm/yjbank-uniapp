<template>
	<view class="login">
		<view class="top">
			<image src="../../static/logo-white.png" style="width: 120px; height: 120px" mode=""></image>
		</view>
		<view class="bottom">
			<!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo">登陆</button> -->
			<button @tap="getUserProfile">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 旧版登录20210413前需适配微信接口改造
			getUserInfo(details) {
				console.log(details)
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log('成功点击登录按钮')
						let js_code = loginRes.code
						this.getOpenid(js_code)
					}
				});
			},
			// 新版登录
			getUserProfile() {
				wx.getUserProfile({
					desc: '获取使用者头像、昵称',
					lang: 'zh_CN',
					success: function(res) {
						// console.log(res.userInfo);
						// getApp().globalData.userInfo = res.userInfo
						// getApp().globalData.userInfo.signature = res.signature
						uni.setStorage({
							key : "userInfo",
							data: {
								...res.userInfo,
								signature: res.signature
							},
							success() {
								uni.navigateBack({
								    delta: 1
								});
							}
						})
					},
					fail: function(res) {
						console.log(res);
					}
				})
			},
			// 获取openid
			getOpenid(js_code) {
				uni.request({
					url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxa88115e813d1c9d8&secret=a934255da1c34a19e6161f898dcf06f8&js_code=' +
						js_code,
					header: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					method: "post",
					success: (res) => {
						console.log(res.data.openid)
						uni.setStorageSync("openid", res.data.openid)
						uni.reLaunch({
							url: '/pages/home/index'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100vh;

		.top {
			background-color: $theme-color;
			height: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				display: block;
			}
		}

		.bottom {
			height: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

			button {
				width: 50%;
				background-color: $theme-color;
				color: #fff;
				box-shadow: 3px 3px 8px #888888;
			}
		}
	}
</style>
