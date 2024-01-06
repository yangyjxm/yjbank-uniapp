<template>
	<view class="add-location">
		<view class="page-section page-section-gap">
			<map style="width: 100%; height: calc( 100vh - 100px )" :latitude="latitude" :longitude="longitude" :markers="markers">
			</map>
		</view>
		<button class="location-btn" @click="addLocation">确认</button>
		<text>{{ address }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 0,
				longitude: 0,
				address: '',
				ad_info: {},
				markers: [{
					iconPath: "/resources/others.png",
					id: 0,
					latitude: 23.099994,
					longitude: 113.324520,
					width: 50,
					height: 80
				}],
				polyline: [{
					points: [{
						longitude: 113.3245211,
						latitude: 23.10229
					}, {
						longitude: 113.324520,
						latitude: 23.21229
					}],
					color: "#c30003DD",
					width: 2,
					dottedLine: true
				}],
				controls: [{
					id: 1,
					iconPath: '/resources/location.png',
					position: {
						left: 0,
						top: 250,
						width: 50,
						height: 50
					},
					clickable: true
				}]
			};
		},
		onLoad() {
			var _this = this
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					_this.latitude = res.latitude
					_this.longitude = res.longitude
					_this.translateLocation()
				},
				fail() {
					console.log('加载地图失败')
				}
			})
		},
		methods: {
			// 调用腾讯地图API翻译用户位置信息
			translateLocation() {
				this.$http.get('http://apis.map.qq.com/ws/geocoder/v1/', {
					params: {
						location: this.latitude + ',' + this.longitude,
						key: '4YLBZ-34FLR-MOGWQ-WUDXD-7ZEUV-XCFMT'
					}
				}).then(res => {
					this.ad_info = res.data.result
					this.address = res.data.result.address
				})
			},
			// 上传位置信息
			addLocation() {
				this.$http.post('/weapp/addLocation', {
					country: this.ad_info.address_component.nation,
					province: this.ad_info.address_component.province,
					city: this.ad_info.address_component.city,
					address: this.ad_info.address,
					date: new Date(),
					user: ''
				}).then(res => {
					this.ad_inf = res.data.result
					this.address = res.data.result.address
				})
			},

		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		text-align: center;
	}
</style>
