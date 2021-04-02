<template>
	<view class="loan">
		<uni-segmented-control class="switch" :current="current" :values="items" @clickItem="onClickItem"
			style-type="text" active-color="#FB6400"></uni-segmented-control>
		<view class="content">
			<view v-if="current === 0">
				<uni-card v-for="(object,index) in chenData" :key="index" :title="object.level" mode="title"
					:is-shadow="true" thumbnail="../../static/vomiting.png" :extra="object.createTime">
					{{object.title}}
				</uni-card>
			</view>
			<view v-if="current === 1">
				<uni-card v-for="(object,index) in yangData" :key="index" :title="object.level" mode="title"
					:is-shadow="true" thumbnail="../../static/vomiting.png" :extra="object.createTime">
					{{object.title}}
				</uni-card>
			</view>
		</view>
		<uni-load-more :status="loadStatus" :contentText="contentText"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newLoanTitle: '',
				current: 0,
				chenData: [],
				yangData: [],
				obj: {},
				items: ['亚', '羊'],
				loadStatus: "loading",
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "做到这些就完美啦~"
				}
			}
		},
		onLoad() {
			this.getExceptList()
		},
		methods: {
			// 获取期待列表
			getExceptList() {
				uniCloud.callFunction({
					name: 'getExcept'
				}).then(res => {
					let data = res.result.data.map(obj => {
						let level = ''
						switch (obj.value) {
							case 1:
								level = '期待程度：低'
								break
							case 2:
								level = '期待程度：中'
								break
							case 3:
								level = '期待程度：高'
								break
						}
						return {
							...obj,
							level
						}
					})
					this.chenData = data.filter(obj => obj.createBy === "杨老师")
					this.yangData = data.filter(obj => obj.createBy !== "杨老师")
					this.loadStatus = "noMore"
				})
			},
			// 切换tab
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss">
	.loan {

		.switch {
			position: fixed;
			width: 100%;
			top: 0;
			background-color: #fff;
			z-index: 999;
		}

		.content {
			margin-top: 36px;
			padding-top: 12px;
		}

		.popup {

			.button {
				text-align: center;
				margin: 5px 0 20px;
			}

			button {
				display: inline-block;
				border-radius: 0;
				line-height: 36px;
				height: 36px;
				width: 230rpx;

				&:after {
					border-radius: 0;
				}
			}

		}

		u-field {
			z-index: 0;
		}

		.addBtn {
			margin: 20px auto;
			width: 80px;
			height: 80px;
			line-height: 80px;
			border-radius: 50%;

			&:after {
				display: none;
			}
		}

	}
</style>
