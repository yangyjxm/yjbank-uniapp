<template>
	<view class="contract">
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">时间</uni-th>
				<uni-th align="center">策略</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr>
				<uni-td>420前</uni-td>
				<uni-td>维持现状</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>420至425</uni-td>
				<uni-td>在文园雅阁共住</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>425至东麓装修好前</uni-td>
				<uni-td>回710或者再租一个</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>东麓装修好后至宣布怀孕前</uni-td>
				<uni-td>和我爸妈分开分别在雅阁或东麓（目前看应该是我们雅阁他们东麓）</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>宣布怀孕后至生产前</uni-td>
				<uni-td>工作日二人居住，周末以合住为主</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>生产后至断奶前（产假结束前）</uni-td>
				<uni-td>在文园雅阁或东麓共住</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>断奶后至上幼儿园前</uni-td>
				<uni-td>孩放在东麓，工作日二人居住，周末灵活探望小孩</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>上幼儿园后</uni-td>
				<uni-td>岛内共同居住为主，此时尽可能实现近而不邻</uni-td>
			</uni-tr>
		</uni-table>
		一起住以后要买洗碗机，小亚负责做饭，不能天天点外卖
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
				openid: uni.getStorageSync("openid"),
				loadStatus: "loading",
				contentText: {
					contentdown: "十个赌徒九个输，倾家荡产不如猪~",
					contentrefresh: "不怕输的苦，就怕戒了赌...",
					contentnomore: "谁家孩子天天哭，哪个赌徒天天输！"
				}
			};
		},
		onShow() {
			this.queryBetList()
			console.log('用户openid：' + uni.getStorageSync("openid"))
			this.getAccessToken()
		},
		methods: {
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
					this.loadStatus = "noMore"
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
	.bet-list {
		.bottom {
			display: flex;
			justify-content: space-between;

			&-left {}
		}
	}
</style>