<template>
	<view class="add-list">
		<button style="background-color: #c30003;" type="primary" size="mini" @click="routerTo('/pages/add/addMessage')">动态</button>
		<button style="background-color: #fb8236;" type="primary" size="mini" @click="routerTo('/pages/add/addExcept')">期待</button>
		<button style="background-color: #fba067;" type="primary" size="mini" @click="routerTo('/pages/add/addBet')">赌约</button>
		<button style="background-color: #fbbf99;" type="primary" size="mini" @click="routerTo('/pages/add/addLocation')">足迹</button>
	</view>
</template>

<script>
	export default {
		methods: {
			// 切换tab
			routerTo(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.add-list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 100vh;
		button{
			height: 20vh;
			width: 85vw;
			font-size: 26px;
			line-height: 20vh;
		}
	}
</style>
