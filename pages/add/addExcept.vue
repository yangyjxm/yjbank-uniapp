<template>
	<view class="addExcept">
		<u-form :model="form" ref="uForm">
			<u-form-item label="期待事项">
				<u-input v-model="form.title" type="textarea" maxlength="500" height="200" />
			</u-form-item>
			<u-form-item label="期待程度">
				<u-rate :count="3" v-model="form.value"></u-rate>
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					title: '',
					value: 3
				}
			};
		},
		methods: {
			// 新增期待
			submit() {
				uniCloud.callFunction({
					name: 'addExcept',
					data: { ...this.form,
						createBy: getApp().globalData.userInfo.nickName,
						createTime: new Date().toLocaleString('zh', { year: 'numeric', month: '2-digit', day: '2-digit'}) + " " + new Date().toTimeString().slice(0,8)
					}
				}).then(res => {
					uni.reLaunch({
						url: '/pages/home/index'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.addExcept {
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
		.u-form-item--left {
			min-width: 80px;
		}
		.u-form-item--left__content__label{
			
		}
		.u-button {
			position: fixed;
			bottom: 20px;
			background-color: $theme-color;
			border: none;
			color: white;
		}
	}
</style>
