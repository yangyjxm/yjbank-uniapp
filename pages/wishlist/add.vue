<template>
	<view class="add-wishlist">
		<u-form :model="form" ref="uForm" label-width="180">
			<u-form-item label="赌约">
				<u-input v-model="form.intro" type="textarea" maxlength="500" height="200" />
			</u-form-item>
			<u-form-item label="羊胜条件">
				<u-input v-model="form.yWin" />
			</u-form-item>
			<u-form-item label="小亚胜条件">
				<u-input v-model="form.cWin" />
			</u-form-item>
			<u-form-item label="羊的奖励">
				<u-input v-model="form.yReward" />
			</u-form-item>
			<u-form-item label="小亚奖励">
				<u-input v-model="form.cReward" />
			</u-form-item>
			<!-- <u-form-item label="图片">
				<image v-if="imgUrl" style="width:180rpx;height:180rpx" :src="imgUrl" mode="widthFix"></image>
				<button v-else class="uploadBtn" @click="upload"><text style="font-size: 80rpx">+</text><br>选择图片</button>
			</u-form-item> -->
			<!-- <u-form-item label="评分">
				<u-rate :count="5" v-model="form.value"></u-rate>
			</u-form-item> -->
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					intro: '',
					yWin: '是',
					cWin: '否',
					yReward: '',
					cReward: ''
				},
				imgUrl: ""
			};
		},
		methods: {
			// 新增赌约
			submit() {
				uniCloud.callFunction({
					name: 'addBet',
					data: { ...this.form,
						createBy: getApp().globalData.userInfo.nickName,
						createTime: new Date().toLocaleString().slice(0, 10) + " " + new Date().toString().slice(16, 24)
					}
				}).then(res => {
					uni.navigateTo({
						url: '/pages/bet/betlist'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.add-wishlist {
		padding: 20px;

		.uploadBtn {
			width: 180rpx;
			line-height: 90rpx;
			height: 180rpx;
			font-size: 24rpx;
			background-color: #eee;
			display: inline-block;

			&:after {
				display: none;
			}
		}
	}
</style>
