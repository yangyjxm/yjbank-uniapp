<template>
	<view class="login">
		<button class="avatarUrl" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
			<image :src="valiFormData.avatarUrl"></image>
		</button>
		<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
			<uni-forms-item label="昵称" required name="nickName">
				<uni-easyinput type="nickname" v-model="valiFormData.nickName" :inputBorder="false"
					placeholder="请输入昵称" />
			</uni-forms-item>
		</uni-forms>
		<button class="submit" @click="submit()">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					nickName: '',
					avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
				},
				// 校验规则
				rules: {
					nickName: {
						rules: [{
							required: true,
							errorMessage: '昵称不能为空'
						}]
					},
				}
			}
		},
		methods: {
			submit() {
				this.$refs['valiForm'].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
					uni.setStorage({
						key: "userInfo",
						data: this.valiFormData,
						success() {
							console.log("userInfo", res);
							uni.navigateBack({
								delta: 1
							});
						}
					})
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							console.log('成功点击登录按钮', loginRes)
							let js_code = loginRes.code
							uni.request({
								method: 'GET',
								url: 'https://api.weixin.qq.com/sns/jscode2session',
								data: {
									appid: 'wxa88115e813d1c9d8',
									secret: 'a934255da1c34a19e6161f898dcf06f8',
									js_code,
									grant_type: 'authorization_code'
								},
								success: res => {
									console.log('看看', res)
									this.openid = res.data.openid
								}
							})
						}
					});
				}).catch(err => {
					console.log('err', err);
				})
			},
			onChooseAvatar(e) {
				this.valiFormData.avatarUrl = e.detail.avatarUrl
				console.log('e.detail', e.detail.avatarUrl)
				this.uploadFile();
			},
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
				uni.getUserProfile({
					desc: '获取使用者头像、昵称',
					lang: 'zh_CN',
					success: function(res) {
						console.log(res.userInfo);
						// getApp().globalData.userInfo = res.userInfo
						// getApp().globalData.userInfo.signature = res.signature
						uni.setStorage({
							key: "userInfo",
							data: {
								...res.userInfo,
								signature: res.signature
							},
							success() {
								console.log("userInfo", res);
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
		padding-top: 80px;
		height: 100vh;

		button::after {
			display: none;
		}

		.avatarUrl {
			background-color: #fff;

			image {
				width: 150px;
				height: 150px;
				border-radius: 10px;
			}
		}

		.submit {
			width: 80%;
			background-color: $theme-color;
			color: $uni-bg-color;
		}

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