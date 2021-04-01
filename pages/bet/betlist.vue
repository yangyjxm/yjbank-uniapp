<template>
	<view class="betlist">
		<!-- 手风琴效果 -->
		<uni-collapse accordion="true">
			<uni-collapse-item :title="item.intro" v-for="item in msgList">
				<view style="padding: 30rpx">
					<view class="bottom">
						<view class="bottom-left-i">
							{{item.yWin}}
						</view>
						<view class="bottom-right-i">
							{{item.cWin}}
						</view>
					</view>
					<view class="bottom">
						<view class="bottom-left-ii">
							{{item.yReward}}
						</view>
						<view class="bottom-right-ii">
							{{item.cReward}}
						</view>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<!-- <u-button @click="sendTemplateMessage">提交</u-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
					selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
					// selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
					midButton: true,
					customIcon: false,
				}],
				userInfo: getApp().globalData.userInfo,
				total: 0,
				msgList: [],
				access_token: '',
				openid: uni.getStorageSync("openid")
			};
		},
		onShow() {
			this.queryBetList()
			console.log('用户openid：' + uni.getStorageSync("openid"))
			this.getAccessToken()
		},
		methods: {
			// 新增愿望
			// add() {
			// 	uni.navigateTo({
			// 		url: '/pages/wishlist/add'
			// 	})
			// },
			// 獲取access_token
			getAccessToken() {
				this.$http.get(
					'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa88115e813d1c9d8&secret=a934255da1c34a19e6161f898dcf06f8'
				).then(res => {
					console.log('getAccessToken')
					console.log(res.data.access_token)
					this.access_token = res.data.access_token
				})
			},
			// 获取打赌数据列表
			queryBetList() {
				uniCloud.callFunction({
					name: 'getBet',
					data: {
						pageSize: this.pageSize,
						pageNum: this.pageNum
					}
				}).then(res => {
					// console.log(res.result.data)
					// this.total = res.result.count.total
					this.msgList = [...this.msgList, ...res.result.data]
					// console.log(this.msgList)
				})
			},
			// 下发模板消息
			sendTemplateMessage() {
				// uniCloud.callFunction({
				// 	name: 'sendTemplateMessage',
				// 	data: {
				// 		pageSize: this.pageSize,
				// 		pageNum: this.pageNum
				// 	}
				// }).then(res => {
				// 	this.msgList = [...this.msgList, ...res.result.data]
				// })
				this.$http.post(
					'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + this.access_token, {
						"touser": this.openid,
						"template_id": "tTskOIT7RycCenrNcXrQQDT9HDqIhVvipgNQKBcAC5E",
						"page": "/pages/home/index/index",
						// "form_id": "FORMID",
						"data": {
							"thing2": {
								"value": "测试测试"
							},
							"time3": {
								"value": "2019年10月1日 15:01"
							}
						}
					}).then(res => {
					console.log('發送訂閱消息')
					// console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.betlist {
		.bottom {
			display: flex;
			justify-content: space-between;

			&-left {}
		}
	}
</style>
