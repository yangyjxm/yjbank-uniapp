<template>
	<view class="addMessage">
		<u-form :model="form" ref="uForm">
			<u-form-item label="文字">
				<u-input v-model="form.intro" type="textarea" maxlength="500" height="200" />
			</u-form-item>
			<u-form-item label="图片">
				<image v-if="imgUrl" style="width:180rpx;height:180rpx" :src="imgUrl" mode="widthFix"></image>
				<button v-else class="uploadBtn" @click="upload"><text
						style="font-size: 80rpx">+</text><br>选择图片</button>
			</u-form-item>
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
					fileList: []
				},
				imgUrl: ""
			};
		},
		methods: {
			upload() {
				new Promise((resolve, reject) => {
					uni.chooseImage({
						count: 1,
						success: res => {
							const path = res.tempFilePaths[0]
							let ext
							uni.getImageInfo({
								src: path,
								success(info) {
									const options = {
										filePath: path,
										cloudPath: Date.now() + '.' + info.type
											.toLowerCase()
									}
									resolve(options)
								},
								fail(err) {
									reject(new Error(err.errMsg || '未能获取图片类型'))
								}
							})
						},
						fail: () => {
							reject(new Error('Fail_Cancel'))
						}
					})
				}).then((options) => {
					uni.showLoading({
						title: '文件上传中...'
					})
					return uniCloud.uploadFile({
						...options,
						onUploadProgress(e) {
							console.log(e)
						}
					})
				}).then(res => {
					uni.hideLoading()
					this.form.fileList = res.fileID
					uni.showModal({
						// content: '图片上传成功，fileId为：' + res.fileID,
						content: '图片上传成功',
						showCancel: false
					}).then(() => {
						// 腾讯云需要获取临时链接
						uniCloud.getTempFileURL({
							fileList: [this.form.fileList],
							success: (res) => {
								this.imgUrl = res.fileList[0].tempFileURL
							},
							fail: () => {
								uni.showModal({
									content: '获取临时链接失败',
									showCancel: false
								})
							}
						})
					})
				}).catch((err) => {
					uni.hideLoading()
					if (err.message !== 'Fail_Cancel') {
						uni.showModal({
							content: `图片上传失败，错误信息为：${err.message}`,
							showCancel: false
						})
					}
				})

			},
			// 新增动态
			submit() {
				uniCloud.callFunction({
					name: 'addMessage',
					data: {
						...this.form,
						createBy: getApp().globalData.userInfo.nickName,
						createTime: new Date().toLocaleString('zh', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit'
						}) + " " + new Date().toTimeString().slice(0, 8)
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
	.addMessage {
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