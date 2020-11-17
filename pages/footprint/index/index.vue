<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">地图</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
		</view>
		<button class="location-btn" @click="goLocation">定位</button>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js'
	// import mapData from '../china.js'
	var _self;
	var canvaColumn = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: ''
			}
		},
		onLoad() {
			this.cWidth = uni.upx2px(600);
			this.cHeight = uni.upx2px(750);
			this.getServerData();
		},
		methods: {
			// 跳转定位页
			goLocation() {
				uni.navigateTo({
					url: '/pages/footprint/location/location'
				})
			},
			// 初始化
			getServerData() {
				uni.request({
					url: 'https://geo.datav.aliyun.com/areas/bound/geojson', 
					data: {
						code: '100000_full'
					},
					header: {
						'custom-header': 'hello', //自定义请求头信息
						'content-type': 'application/json' // 默认值
					},
					success: (res) => {
						console.log(res.data);
					}
				});
				let cMap = {
					series: []
				}
				// cMap.series = mapData.features
				this.showColumn("canvasColumn", cMap)
			},
			showColumn(canvasId, chartData) {
				_self = this
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'map',
					fontSize: 11,
					padding: [0, 0, 0, 0],
					legend: {
						show: false
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						map: {
							border: true,
							borderWidth: 1,
							borderColor: '#666666',
							fillOpacity: 0.6
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #fff;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 750upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 600upx;
		height: 750upx;
		margin: 0 auto;
		background-color: #FFFFFF;
	}


	.location-btn {
		margin: 20px auto;
		width: 80px;
		height: 80px;
		line-height: 80px;
		border-radius: 50%;
		border: none;
	}

	button::after {
		display: none;
	}
</style>
