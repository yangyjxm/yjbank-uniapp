<template>
	<view class="login">
		<view class="top">
			<image src="../../static/logo-white.png" style="width: 120px; height: 120px" mode=""></image>
		</view>
		<view class="bottom">
			<button open-type="getUserInfo" @getuserinfo="getUserInfo">登陆</button>
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
			getUserInfo(details) {
				console.log(details)
				// uni.login({
				//   provider: 'weixin',
				//   success: function (loginRes) {
				//     console.log(loginRes.authResult);
				//   }
				// });
				uni.redirectTo({
					url: '/pages/home/index/index'
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
