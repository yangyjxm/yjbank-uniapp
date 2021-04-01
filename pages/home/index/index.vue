<template>
	<view class="home">
		<!-- <button class="addBtn" @click="addMessage()">+</button> -->
		<!-- <uni-notice-bar showIcon="true" scrollable="true" single="true" text="🎉🎉🎉关于表彰最持久女友陈亚君同志的通知🎉🎉🎉"></uni-notice-bar> -->
		<view class="block">
			<view class="block-first">在一起已经</view>
			<view class="block-second">{{gap}}～</view>
			<uni-grid :column="4" :show-border="false" :square="false" @change='change'>
				<uni-grid-item class="center" index="1">
					<image src="../../../static/xiong-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>贷款</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="2">
					<image src="../../../static/gougou-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>树洞</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="3">
					<image src="../../../static/zhu-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>打卡</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="4">
					<image src="../../../static/yang-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>足迹</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="5">
					<image src="../../../static/tuzi-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>提醒</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="6">
					<image src="../../../static/qingwa-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>打赌</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="7">
					<image src="../../../static/daxiongmao-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>期待</view>
				</uni-grid-item>
				<uni-grid-item class="center" index="8">
					<image src="../../../static/maotouying-01.png" mode="" style="width: 30px; height: 30px"></image>
					<view>新增</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- <uni-card v-for="item in 6" :key="item.id" mode="style" :is-shadow="true" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
		 extra="yangyjxm 2020-06-04 23:49:43">
			那是一个春意盎然、金风送爽的日子，我和小亚一起来到了位于特房波特曼旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
		</uni-card> -->
		<uni-card v-for="item in messageData" :key="item.id" :mode="item.imgUrl ?'style': 'basic'" :is-shadow="true"
		 :thumbnail="item.imgUrl" :note="item.createBy + ' ' + item.createTime">
			{{item.intro}}
		</uni-card>
		<uni-load-more :status="loadStatus"></uni-load-more>
		<!-- <u-tabbar v-model="current" @change="addMessage()" :list="list" :mid-button="true" border-top :height="50"></u-tabbar> -->
	</view>
</template>

<script>
	import Moment from 'moment'
	export default {
		data() {
			return {
				gap: '0天0时0分0秒',
				list: [{
					iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
					selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
					// selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
					midButton: true,
					customIcon: false,
				}],
				current: 1,
				messageData: [],
				loadStatus: "loading",
				total: 0,
				pageSize: 5,
				pageNum: 0
			}
		},
		onLoad() {
			this.computedTime()
			let timeCount = setInterval(() => this.computedTime(), 1000);
			this.getMessage()
		},
		onReachBottom() {
			if (this.messageData.length === this.total) {
				this.loadStatus = "noMore"
				return
			} else {
				this.pageNum++
				this.getMessage()
			}
		},
		methods: {
			// 计算当前时间于在一起时间的时间差
			computedTime() {
				let m2 = Moment(); // 当下时间
				let m1 = Moment('2020-06-04 23:49:00'); // 起始时间
				let du = Moment.duration(m2 - m1, 'ms'); // 做差
				this.gap = m2.diff(m1, 'day') + '天' + du.get('hours') + '时' + du.get('minutes') + '分' + du.get('seconds') + '秒'
			},
			// 获取动态信息列表
			getMessage() {
				uniCloud.callFunction({
					name: 'getMessage',
					data: {
						pageSize: this.pageSize,
						pageNum: this.pageNum
					}
				}).then(res => {
					this.total = res.result.count.total
					this.messageData = [...this.messageData, ...res.result.data]
					for (let i = 0; i < res.result.data.length; i++) {
						// 腾讯云需要获取临时链接
						if (res.result.data[i].fileList) {
							uniCloud.getTempFileURL({
								fileList: [res.result.data[i].fileList],
								success: (res) => {
									this.messageData[this.pageNum*this.pageSize + i].imgUrl = res.fileList[0].tempFileURL
								}
							})
						}
					}
					// this.loadStatus = "noMore"
				})
			},
			// 新增动态
			addMessage() {
				uni.navigateTo({
					url: '/pages/add/addMessage'
				})
			},
			// 切换tab
			change(e) {
				switch (e.detail.index) {
					case 1:
						uni.navigateTo({
							url: '/pages/loan/loan'
						})
						break
					case 2:
						uni.navigateTo({
							url: '/pages/treehole/treehole'
						})
						break
					case 3:
						uni.navigateTo({
							url: '/pages/calendar/calendar'
						})
						break
					case 4:
						uni.navigateTo({
							url: '/pages/footprint/index/index'
						})
						break
					case 5:
						// uni.navigateTo({
						// 	url: '/pages/wishlist/wishlist'
						// })
						uni.requestSubscribeMessage({
							tmplIds: ['tTskOIT7RycCenrNcXrQQDT9HDqIhVvipgNQKBcAC5E'],
							success(response) {
								console.log(response)
							},
							fail(err) {
								console.log(err)
							}
						})
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								let js_code = loginRes.code
								uni.request({
									url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxa88115e813d1c9d8&secret=a934255da1c34a19e6161f898dcf06f8&js_code=' +
										js_code,
									header: {
										"Content-Type": "application/x-www-form-urlencoded"
									},
									method: "post",
									success: (res) => {
										console.log("本用户的openid为" + res.data.openid)
										uni.setStorageSync("openid", res.data.openid)
										// uni.request({
										// 	url: 'http://121.4.13.87:3000/test/birthday?openid=' +
										// 		res.data.openid,
										// 	method: "get",
										// 	success: (response) => {
										// 		console.log(response)
										// 	},
										// 	fail: (err) => {
										// 		console.log(err)
										// 	}
										// })
									}
								})
							}
						});
						break
					case 6:
						uni.navigateTo({
							url: '/pages/bet/betlist'
						})
						break
					case 7:
						uni.navigateTo({
							url: '/pages/expect/list'
						})
						break
					case 8:
						uni.navigateTo({
							url: '/pages/add/list'
						})
						break
				}
			}
		}
	}
</script>

<style lang="scss">
	.home {
		padding-bottom: 20rpx;

		.uni-noticebar {
			margin: 0 !important;
		}

		.block {
			background: $theme-color;
			padding-top: 10px;
			border-radius: 0 0 30% 30%;
			margin-bottom: 25px;
		}

		.block-first {
			color: #fff;
			margin-left: 5%;
			font-size: 18px;
		}

		.block-second {
			color: #fff;
			margin-left: 5%;
			font-size: 24px;
			font-weight: bold;
		}

		.uni-grid-wrap {
			position: relative;
			top: 10px;
			background-color: #fff;
			width: 90%;
			margin: 10px auto;
			border-radius: 20px;
			padding: 10px 0;
			color: $theme-color;
			box-shadow: 3px 3px 8px #888888;
		}

		.center {
			text-align: center;
		}
		
		.uni-card__thumbnailimage {
			height: 240px !important;
		}

		image {
			margin: 0 auto;
		}

		.addBtn {
			position: fixed;
			// right: 20rpx;
			bottom: 20rpx;
			left: calc(50% - 50rpx);
			z-index: 99999;
			width: 100rpx;
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 50%;
			// background-color: $theme-color;
			color: #999;
			font-weight: bold;
			box-shadow: 3px 3px 8px #888888;

			&:after {
				display: none;
			}
		}

	}
</style>
