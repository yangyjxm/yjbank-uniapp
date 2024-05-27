<template>
	<view class="vueBox ">
		<!-- 必须把id放在父组件中才能获取到剩余列表的高度 -->
		<!-- <view class="comShopVueTop myflex" id="comShopVueTop" 
		style="width: 100%;background-color: #fff;opacity: 1;display: flex;flex-direction: column;" >
			<view style="width: 100%;">
				<cu-custom bgColor="myThemeBg" :isBack="false">
				　　<block slot="backText" >返回</block>
				　　<block slot="content">商城：列表数据较大时</block>
				</cu-custom>
			</view>
			
			<view style="width: 100%;height: 400rpx;">
				<image src="/static/icon_img/xigua.jpg" style="width: 100%;height: 400rpx;"></image>
			</view>
			
		</view> -->

		<view class="comShopVueTy" v-if="true">
			<view class="comShopVueType">
				<view class="comShopVueTypeLeft" v-if="true">
					<view class="comShopVueTypeLeftWrapper" v-if="true" :style="[{height: height_sheng+'px'}]">
						<swiper :duration="500" :vertical="true" :display-multiple-items="navCount"
							:style="'height:'+height_sheng+'px'">
							<!-- :current-item-id="navScroll" -->
							<swiper-item v-for="item,index in navList" :key="index" class="" style="max-height: 80rpx;"
								:item-id="item.navId">
								<view :class="category_id==item.category_id && category_id>0?'myThemeBg':''"
									:style="category_id==item.category_id && category_id>0?'':'background-color: #f2f2f2;color: #646464;'"
									style="width: 100%;height: 100rpx;margin-top: 0px;height: 80rpx;line-height: 80rpx;display: flex;
								align-items: center;justify-content: center;font-size: 26rpx;" @click="onClickCategoryFind(item)">
									{{item.title}}
								</view>
							</swiper-item>

						</swiper>
					</view>
				</view>

				<view class="comShopVueTypeRight" v-if="height_sheng>0">
					<!-- style="width: 100%;;margin-left: 100rpx;" -->
					<z-paging :fixed="false" :height="[(height_sheng-20)+'px']" style="width: 100%;;margin-left: 30rpx;"
						ref="paging" v-model="get_goods_list" @query="queryList">

						<!-- 	<view slot="top" style="width: 100%;background-color: #fff;display: flex;justify-content: flex-end;
						margin-bottom: 20rpx;">
							<view class="comShopVueTypeRightNavBox">默认</view>
							<view class="comShopVueTypeRightNavBox">销量</view>
							<view class="comShopVueTypeRightNavBox">价格</view>
						</view> -->
						<view slot="top" style="width: 100%;height: 1px;background-color: #f2f2f2;"></view>

						<view class="comVueGoods" v-for="item_g,index_g in get_goods_list" :key="index_g">
							<view class="comVueGoodsIg">
								<view class="comVueGoodsImg">
									<image :src="item_g.pic" mode="scaleToFill" class="comVueGoodsImgImg"></image>
								</view>

								<view class="comVueGoodsRight" v-if="true">
									<view class="comVueGoodsRightTitle text-overflow-two">
										{{item_g.title}}
									</view>
									<view class="comVueGoodsRightDesc ">
										{{item_g.desc}}
									</view>
									<!-- <view class="comVueGoodsRightTag ">
										<text class="comVueGoodsRightTagBox" v-for="item_tag,index_tag in 3" :key="index_tag">
											特价
										</text>
									</view> -->
									<view class="comVueGoodsRightEnd ">
										<view class="comVueGoodsRightEndLeft">
											<!-- 		<text class="text-price text-red comVueGoodsRightEndLeftPrice">200</text>
											<text class="text-price-del text-price"
												style="color: #646464;margin-top: 5rpx;">500</text> -->
										</view>
										<view class="comVueGoodsRightEndRight">
											<view style="font-size: 24rpx;width: 100rpx;
											height: 40rpx;border-radius: 20rpx;" class="myflex myThemeBg">详情</view>
										</view>
									</view>

								</view>
							</view>

							<view style="width: 100%;height: 1px;background-color: #f2f2f2;margin: 15rpx 0 0 0;"></view>
						</view>


					</z-paging>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		computed: {
			userFind() {
				// return this.$store.state.userFind
			}
		},
		data() {
			return {
				category_id: 0,

				navCount: 0,
				CustomBar: this.CustomBar,
				windowWidth: this.windowWidth,
				windowHeight: this.windowHeight,
				height_sheng: 0,

				navList: [],
				get_goods_list: [{
					title: '盐酥鸡',
					desc: '空气炸锅炸一炸',
					pic: 'https://mp-0c94e1d0-ced8-4bdf-9912-4d17971f66df.cdn.bspapp.com/cloudstorage/2447a0a7-dc00-48ef-be08-5e45bc996738.png'
				}],

				is_show_list: false,
			};
		},

		//	页面加载
		onLoad(options) {
			console.log('___________onLoad__________start')
			console.log(options)
		},
		created() {
			var that = this
			// ifdef H5
			setTimeout(() => {
				that._init_api()
			}, 300)
			// endif
		},
		onReady() {
			this._init_api()
		},
		//	页面显示
		onShow() {

		},
		//	页面隐藏
		onHide() {

		},
		//	页面卸载
		onUnload() {

		},
		//	页面下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500);

		},
		//	点击分享
		onShareAppMessage() {

		},
		//	监听页面滚动	页面在垂直方向已滚动的距离（单位px）
		onPageScroll() {

		},
		//	监听页面返回
		onBackPress(options) {

		},
		/**
		 * 上拉加载
		 */
		onReachBottom() {
			console.log('上拉加载')
			if (this.loading === 'noMore') return
			// this.page++

		},
		methods: {
			//在上述代码中，我们使用了 uni.getSystemInfo() 方法获取系统信息，包括窗口高度 (windowHeight)，并将其存储在 this.containerHeight 中。然后，使用 uni.createSelectorQuery() 方法获取指定元素的高度 (boundingClientRect()) 和位置信息，分别存储在 this.fixedBoxHeight，this.bottomBoxHeight 和 this.contentHeight 中。最后，计算出剩余底部高度 this.remainingHeight，并通过计算得到 height: calc(100vh - 100px); 来设置 .scroll-box 的高度。
			_init_api() {
				console.log('________________________________created____start')
				var that = this
				setTimeout(function() {
					that.is_show_list = true
					//	初始化剩余高度

				}, 1000)

				that._init_height()

				//	获取分类
				that.get_goods_category_list_api()

				//	获取商品列表
				that._get_goods_list()

				console.log('________________________________created____end')
			},


			_init_height() {
				var that = this

				console.log('______________________init_height')

				// 条件编译——————————————————————————h5时
				// ifdef H5
				that.height_sheng = 700

				// that.navCount = Math.round(that.height_sheng/50)
				//	display-multiple-items 不能大于 swiper-item 数量  navCount <= list

				var navCount = that.height_sheng / 40

				navCount = Math.floor(navCount);


				if (navCount > that.navList.length) {
					that.navCount = that.navList.length
				} else {
					that.navCount = navCount
				}

				// that.navCount = navCount
				// endif


				// ifndef H5
				uni.createSelectorQuery().select('#dGoodsHomeId').boundingClientRect((res) => {
					console.log('_____________________1')
					console.log(res)
					//	剩余的高度=系统高度-已填充的高度
					that.height_sheng = that.windowHeight - res.height

					// that.navCount = Math.round(that.height_sheng/50)
					//	display-multiple-items 不能大于 swiper-item 数量  navCount <= list

					var navCount = that.height_sheng / 40

					navCount = Math.floor(navCount);

					if (navCount > that.navList.length) {
						that.navCount = that.navList.length
					} else {
						that.navCount = navCount
					}
					// that.navCount = navCount

				}).exec()
				// endif


			},

			queryList(pageNo, pageSize) {
				this._get_goods_list(pageNo, pageSize)
			},

			async _get_goods_list(pageNo = 1, pageSize = 10) {
				if (true) {
					this._get_goods_list_demo()
				} else {
					//	获取商品列表数据
					// var params = {
					// 	page:pageNo,
					// 	list_rows:pageSize,
					// 	category_id:this.category_id,
					// 	goods_id:this.goods_id,
					// 	search_name:this.search_name_goods,
					// }

					// var resData = await this._Api(this._Router.get_goods_list, params,'GET',true)

					// var dataList = resData.data.data

					// console.log(dataList)
					// this.$refs.paging.complete(dataList)
				}


				// this.is_show_list = true
			},
			//	模拟数据
			_get_goods_list_demo() {
				var i = 0

				var get_goods_list = []
				for (i; i < 20; i++) {
					if (i == 0) {
						get_goods_list.push({
							id: (10000 + i).toString(),
							title: '商品数据量大时，推荐使用此插件，超丝滑  无任何卡顿，超丝滑超丝滑超丝滑超丝滑超丝滑',
							price: 199,
							cover: '',
						})
					} else {
						get_goods_list.push({
							id: (10000 + i).toString(),
							title: '商品' + (10000 + i).toString(),
							price: 199,
							cover: '',
						})
					}

				}

				this.is_show_list = true

				this.$refs.paging.complete(get_goods_list)
			},

			async get_goods_category_list_api() {
				return this.get_goods_category_list_api_demo()

				let params = {
					page: 1,
					list_rows: 10
				}

				this.loading = 'loading'

				var resData = await this._Api(this._Router.get_goods_category_list, params)

				this.navList = resData.data.data
				console.log(this.navList)
			},
			async get_goods_category_list_api_demo() {

				this.navList = [{
					title: '肉食主义',
					category_id: 2,
				}, {
					title: '江河湖海',
					category_id: 3,
				}, {
					title: '碳水快乐',
					category_id: 4,
				}, {
					title: '开心农场',
					category_id: 5,
				}, {
					title: '即将上架',
					category_id: 1,
				}]


				if (this.category_id == 0) {
					this.category_id = this.navList[0].category_id
				}
			},
			onClickCategoryFind(item) {
				this.category_id = item.category_id

				this.$refs.paging.reload()
			}

		}
	}
</script>

<style>
	page {
		background-color: #f2f2f2;
	}
</style>
<style lang="scss" scoped>
	.myflex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text-overflow-two {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.text-overflow-one {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.vueBox {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.myThemeBg {
		background-image: linear-gradient(-90deg, #ff4e8a, #ff8ec2);
		background-image: linear-gradient(-90deg, $theme-color, $theme-color);
		color: #fff;
	}

	.comShopVueTop {}

	.comShopVueTy {
		width: 100%;
		height: calc(100vh - 300rpx -10px);
		background-color: #000;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		position: relative;

		.comShopVueType {
			top: 0;
			width: 100%;
			height: calc(100vh - 300rpx -10px);
			background-color: #fff;
			z-index: 10;
			display: flex;
			justify-content: space-between;
			position: absolute;

			.comShopVueTypeLeft {
				width: 30%;
				height: 100%;
				background-color: #fff;

				.comShopVueTypeLeftWrapper {

					width: 100%;
					background-color: #f2f2f2;
					overflow-y: scroll;
				}
			}

			.comShopVueTypeRight {
				width: 80%;
				height: 100%;
				background-color: #fff;
				min-width: 325rpx;
				min-height: 600rpx;
				margin-left: 20rpx;

				.comShopVueTypeRightNavBox {
					width: 80rpx;
					height: 40rpx;
					background-color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24rpx;

				}
			}

		}
	}

	.comVueGoods {
		width: 100%;
		// height: 200rpx;
		background-color: #fff;
		display: flex;
		margin: 25rpx 0 0rpx 0;
		// padding: 0 20rpx;
		display: flex;
		flex-direction: column;

		.comVueGoodsIg {
			width: 100%;
			// height: 200rpx;
			background-color: #fff;
			display: flex;
		}

		.comVueGoodsImg {
			width: 120rpx;
			height: 120rpx;
			background-color: #f2f2f2;
			border-radius: 50%;
			flex: none;

			.comVueGoodsImgImg {
				width: 120rpx;
				height: 120rpx;
				background-color: #f2f2f2;
				border-radius: 50%;
				flex: none;
			}
		}

		.comVueGoodsRight {
			flex: 1;
			margin-left: 20rpx;
			margin-right: 20rpx;

			.comVueGoodsRightTitle {
				font-size: 28rpx;
			}

			.comVueGoodsRightDesc {
				margin-top: 5rpx;
				width: 350rpx;
				height: 50rpx;
				font-size: 24rpx;
				color: #999;
				overflow: hidden;

				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.comVueGoodsRightTag {
				width: 100%;
				height: 50rpx;
				display: flex;
				font-size: 24rpx;

				// background-color: ;
				.comVueGoodsRightTagBox {
					height: 40rpx;
					border: 1px solid red;
					border-radius: 20rpx;
					padding: 0 20rpx;
					background-color: #ccc;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			.comVueGoodsRightEnd {
				width: 100%;
				height: 50rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.comVueGoodsRightEndLeft {
					display: flex;

					.comVueGoodsRightEndLeftPrice {
						margin-right: 20rpx;
						font-size: 30rpx;
					}
				}

				.comVueGoodsRightEndRight {

					// width: 80rpx;
					// height: 50rpx;
					background-color: #fff;
				}
			}
		}
	}
</style>