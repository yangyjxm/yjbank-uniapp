<template>
	<view class="wishlist">
		<!-- 手风琴效果 -->
		<uni-collapse accordion="true">
			<uni-collapse-item title="标题文字">
				<view style="padding: 30rpx;">
					手风琴效果
					<view class="bottom">
						<view class="bottom-left">
							1
						</view>
						<view class="bottom-right">
							1
						</view>
					</view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30rpx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字">
				<view style="padding: 30rpx;">
					手风琴效果
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
				userInfo: getApp().globalData.userInfo
			};
		},
		onShow() {
			console.log('this.userInfo')
			console.log(getApp().globalData.userInfo)
		},
		methods: {
			// 新增愿望
			add() {
				uni.navigateTo({
					url: '/pages/wishlist/add'
				})
			}
		}
	}
</script>

<style lang="scss">
	.wishlist {
		.bottom {
			display: flex;
			justify-content: space-between;

			&-left {}
		}
	}
</style>
