<template>
	<view class="launch">
		<image src="../../static/launch-bak.png" mode=""></image>
		<!-- <image src="../../static/launch.jpg" mode=""></image> -->
		<div class="countdown" @click="routerToHome">跳转 | {{countdown}}s</div>
		<div class="weddingCountdown">距<br />离<br />领<br />证<br />还<br />有<br /><span
				class="num">{{weddingCountdown}}<br /></span>天</div>
	</view>
</template>

<script>
	import Moment from 'moment'
	export default {
		data() {
			return {
				time: null,
				weddingCountdown: 0,
				countdown: 5
			}
		},
		mounted() {
			let m2 = Moment(); // 当下时间
			let m1 = Moment('2024-06-04 00:00:00'); // 起始时间
			this.weddingCountdown = m1.diff(m2, 'day')
			this.time = setInterval(() => {
				this.countdown--
				if (this.countdown === 0) {
					uni.reLaunch({
						url: '/pages/home/index'
					})
					clearInterval(this.time)
				}
			}, 1000)
		},
		methods: {
			routerToHome() {
				clearInterval(this.time)
				uni.reLaunch({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.launch {
		height: 100vh;

		.countdown {
			font-family: cursive;
			position: fixed;
			border-radius: 15px;
			border: 1px solid #ececec;
			padding: 3px 10px;
			background-color: rgba(0, 0, 0, 0.2);
			text-align: center;
			bottom: 5%;
			right: 5%;
			color: #fff;

			.num {
				color: white;
				font-size: 24px;
				font-weight: bold;
			}
		}

		.weddingCountdown {
			position: fixed;
			font-family: cursive;
			width: 100%;
			text-align: center;
			top: 22%;
			left: 0;
			font-weight: bold;
			font-size: 46px;
			color: #fff;

			.num {
				color: white;
				// font-size: 76px;
				font-weight: bold;
				font-family: monospace;
			}
		}

		image {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>