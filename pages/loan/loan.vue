<template>
	<view class="loan">
		<uni-segmented-control class="switch" :current="current" :values="items" @clickItem="onClickItem" style-type="text"
		 active-color="#219511"></uni-segmented-control>
		<view class="content">
			<view v-if="current === 0">
				<uni-list>
					<uni-list-item v-for="(object,index) in unfinishData" :key="index" :rightText="object.title" clickable @click="open(object)"
					 thumb="../../static/unfinish.png"></uni-list-item>
					<u-line />
					<u-field v-model="newLoanTitle" label-width="0" placeholder="于此输入新的贷款" input-align="center" placeholder-style="color: #999;font-size: 12px">
					</u-field>
					<u-line />
					<button class="addBtn" @click="addNewLoan()">新增</button>
				</uni-list>
			</view>
			<view v-if="current === 1">
				<uni-list>
					<uni-list-item v-for="(object,index) in doingData" :key="index" :rightText="object.title" clickable @click="open(object)"
					 thumb="../../static/doing.png"></uni-list-item>
				</uni-list>
			</view>
			<view v-if="current === 2">
				<uni-list>
					<uni-list-item v-for="(object,index) in finishData" :key="index" :rightText="object.title" clickable @click="open(object)"
					 thumb="../../static/finish.png"></uni-list-item>
				</uni-list>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" class="popup">
			<uni-list>
				<uni-list-item title="项目" :showArrow="false" :rightText="obj.title" />
				<uni-list-item title="创建时间" :showArrow="false" :rightText="obj.createTime" />
				<uni-list-item v-if="obj.createBy" title="创建人" :showArrow="false" :rightText="obj.createBy" />
				<uni-list-item v-if="obj.completeTime" title="完成时间" :showArrow="false" :rightText="obj.completeTime" />
				<uni-list-item v-if="obj.details" title="明细" :showArrow="false" :rightText="obj.details" />
				<view class="button">
					<button type="primary" size="mini" @click="updateLoan('1')">完成</button>
					<button type="default" size="mini" @click="updateLoan('3')">开始</button>
					<button type="warn" size="mini" @click="updateLoan('2')">删除</button>
				</view>
			</uni-list>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newLoanTitle: '',
				current: 0,
				unfinishData: [],
				finishData: [],
				doingData: [],
				unfinish: 0,
				doing: 0,
				finish: 0,
				obj: {}
			}
		},
		computed: {
			items() {
				let array = []
				array[0] = '未完成' + '（' + this.unfinish + '）'
				array[1] = '进行中' + '（' + this.doing + '）'
				array[2] = '已完成' + '（' + this.finish + '）'
				return array
			}
		},
		onLoad() {
			this.countLoan()
			this.queryLoanList()
		},
		methods: {
			// 获取贷款列表
			queryLoanList() {
				// this.$http.post('/weapp/queryLoanList', {}).then(res => {
				// 	this.unfinishData = res.data.resultData.filter(obj => obj.status === 0)
				// 	this.finishData = res.data.resultData.filter(obj => obj.status === 1)
				// 	this.doingData = res.data.resultData.filter(obj => obj.status === 3)
				// })

				uniCloud.callFunction({
					name: 'getLoan'
				}).then(res => {
					this.unfinishData = res.result.data.filter(obj => obj.status === "0")
					this.finishData = res.result.data.filter(obj => obj.status === "1")
					this.doingData = res.result.data.filter(obj => obj.status === "3")
				})
			},
			// 获取当前贷款统计数量信息
			countLoan() {
				// this.$http.get('/weapp/countLoan', {}).then(res => {
				// 	this.items[0] += '（' + res.data.resultData.find(obj => obj.STATUS === 0).number + '）'
				// 	this.items[1] += '（' + res.data.resultData.find(obj => obj.STATUS === 3).number + '）'
				// 	this.items[2] += '（' + res.data.resultData.find(obj => obj.STATUS === 1).number + '）'
				// })
				uniCloud.callFunction({
					name: 'countLoan'
				}).then(res => {
					this.unfinish = res.result.unfinish
					this.doing = res.result.doing
					this.finish = res.result.finish
				})
			},
			// 切换tab
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			// 查看贷款具体信息弹窗
			open(object) {
				this.obj = object
				this.obj.createTime = this.obj.createTime.substring(0, 10)
				if (this.obj.completeTime) this.obj.completeTime = this.obj.completeTime.substring(0, 10)
				this.$refs.popup.open()
			},
			// 新增贷款信息弹窗
			openAddPopup(object) {
				this.$refs.addPopup.open()
			},
			// 新增贷款 
			addNewLoan() {
				// this.$http.post('/weapp/addLoan', {
				// 	title: this.newLoanTitle,
				// 	status: 0,
				// 	createBy: getApp().globalData.userInfo.nickName,
				// 	createTime: new Date()
				// }).then(res => {
				// 	this.queryLoanList()
				// 	this.newLoanTitle = ''
				// })

				uniCloud.callFunction({
					name: 'addLoan',
					data: {
						completeTime: "",
						details: "",
						title: this.newLoanTitle,
						status: "0",
						createBy: getApp().globalData.userInfo.nickName,
						createTime: new Date().toLocaleString('zh', { year: 'numeric', month: '2-digit', day: '2-digit'}) + " " + new Date().toTimeString().slice(0,8)
					}
				}).then(res => {
					this.queryLoanList()
					this.countLoan()
					this.newLoanTitle = ''
				})
			},
			// 更新贷款状态
			updateLoan(status) {
				let _this = this
				let completeTime = ''
				if (status === "1") {
					completeTime = new Date()
				}
				// this.$http.post('/weapp/updateLoan', {
				// 	title: this.obj.title,
				// 	completeTime,
				// 	status
				// }).then(res => {
				// 	_this.queryLoanList()
				// 	_this.$refs.popup.close()
				// })
				uniCloud.callFunction({
					name: 'updateLoan',
					data: {
						title: this.obj.title,
						completeTime,
						status
					}
				}).then(res => {
					_this.queryLoanList()
					_this.countLoan()
					_this.$refs.popup.close()
				})

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
