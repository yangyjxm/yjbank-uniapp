## 超简单，会根据手机屏幕大小，自动计算剩余列表的高度
## 
## 即使数据量再大 ，也会适应 ，无卡顿
## 
### d-goods-home


#### 步骤一：需要先在 APP.vue
````
windowWidth、windowHeight 挂载到vue里 可直接使用this.windowWidth


<script>
	import Vue from 'vue'
	export default {
		 onLaunch: async function() {
			uni.getSystemInfo({
				success: async function(e) {
					console.log('_______________获取系统信息_________________start')
					console.log(e)
					Vue.prototype.windowWidth = e.windowWidth;
					Vue.prototype.windowHeight = e.windowHeight;
					console.log('_______________获取系统信息_________________end')
````	

#### 步骤二：页面
````

<template>
	<view class="vueBox ">
		<view id="dGoodsHomeId" style="width: 100%;">
			
			<view style="width: 100%;height: 300rpx;background-color: pink;">
				
			</view>
		</view>
		
		<view style="width: 100%;">
			<d-goods-home></d-goods-home>
		</view>
		
		
	</view>
</template>




<script>
	
</script>

<style lang="scss" scoped>

</style>



````



友链：

作者全部插件：[](https://ext.dcloud.net.cn/publisher?id=117346)

列表数据量较少时推荐使用这个，体验更丝滑：[](https://ext.dcloud.net.cn/plugin?id=8428)


使用的商品列表插件：[](https://ext.dcloud.net.cn/plugin?id=3935)