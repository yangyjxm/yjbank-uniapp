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
		<u-tabbar v-model="current" @change="add" :list="list" :mid-button="true" border-top :height="50"></u-tabbar>
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
				current: 1,
				userInfo: getApp().globalData.userInfo,
				total: 0,
				msgList: []
			};
		},
		onShow() {
			console.log('this.userInfo')
			console.log(getApp().globalData.userInfo)
			this.queryBetList()
		},
		methods: {
			// 新增愿望
			add() {
				uni.navigateTo({
					url: '/pages/wishlist/add'
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
