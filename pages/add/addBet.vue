<template>
	<view class="addBet">
		<u-form :model="form" ref="uForm" label-width="180">
			<u-form-item label="赌约">
				<u-input v-model="form.intro" type="textarea" maxlength="400" height="150" />
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
				}
			};
		},
		methods: {
			// 新增赌约
			submit() {
				uniCloud.callFunction({
					name: 'addBet',
					data: { ...this.form,
						createBy: getApp().globalData.userInfo.nickName,
						createTime: new Date().toLocaleString('zh', { year: 'numeric', month: '2-digit', day: '2-digit'}) + " " + new Date().toTimeString().slice(0,8)
					}
				}).then(res => {
					uni.reLaunch({
						url: '/pages/bet/betlist'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.addBet {
		padding: 20px;
	}
</style>
