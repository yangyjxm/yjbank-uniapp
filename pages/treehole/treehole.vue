<template>
	<view class="treehole">
		<view :key='itme.id' v-for='(item,index) in msgList' class="block">
			<!-- <view class="floor">{{ index }}楼</view> -->
			<view class="floor">{{ firstName[(index % 200)] }}子{{ lastName[(index % 2)] }}:</view>
			<!-- 					<view class="floor">{{ item.id }}楼</view>
			<view class="floor">{{ firstName[(item.id % 200)] }}子{{ lastName[(item.id % 2)] }}</view> -->
			<view class="content">{{ item.content }}</view>
			<view class="time">{{ item.time }}</view>
		</view>
		<uni-load-more :status="loadStatus"></uni-load-more>
		<!-- <button class="location-btn" @click="signup">补录</button> -->
		<view class='inputRoom'>
			<input v-model="value" @input="onKeyInput" @confirm="addTreehole"></input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList: [],
				value: '',
				firstName: [
					'陈', '杨', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
					'赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '元',
					'褚', '卫', '蒋', '沈', '韩', '卜', '朱', '秦', '尤', '许',
					'何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
					'陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
					'云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦',
					'昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
					'酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺',
					'倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
					'乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
					'姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝',
					'明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞',
					'熊', '纪', '舒', '屈', '项', '祝', '董', '粱', '杜', '阮',
					'蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危',
					'江', '童', '颜', '郭', '梅', '盛', '林', '刁', '钟', '徐',
					'邱', '骆', '高', '夏', '蔡', '田', '樊', '胡', '凌', '霍',
					'虞', '万', '支', '柯', '咎', '管', '卢', '莫', '经', '房',
					'裘', '缪', '干', '解', '应', '宗', '宣', '丁', '贲', '邓',
					'郁', '单', '杭', '洪', '包', '诸', '左', '石', '崔', '吉',
					'钮', '龚', '程', '嵇', '邢', '滑', '裴', '陆', '荣', '翁'
				],
				lastName: ['哥', '姐'],
				loadStatus: "loading",
				total: 0,
				pageSize: 30,
				pageNum: 0
			}
		},
		onLoad() {
			this.queryTreeholeList()
		},
		onReachBottom() {
			if (this.msgList.length === this.total) {
				this.loadStatus = "noMore"
				return
			} else {
				this.pageNum++
				this.queryTreeholeList()
			}
		},
		methods: {
			// 获取树洞数据列表
			queryTreeholeList() {
				// this.$http.get('/weapp/queryTreeholeList', {}).then(res => {
				// 	this.msgList = res.data.map(obj => ({
				// 		id: obj.id,
				// 		time: Moment(obj.time).format('YYYY-M-D HH:mm'),
				// 		content: obj.content
				// 	})).reverse()
				// })
				uniCloud.callFunction({
					name: 'getTreehole',
					data: {
						pageSize: this.pageSize,
						pageNum: this.pageNum
					}
				}).then(res => {
					this.total = res.result.count.total
					this.msgList = [...this.msgList, ...res.result.data]
				})
			},
			// 新增评论
			addTreehole() {
				// this.$http.post('/weapp/addTreehole', {
				// 	// userid: app.globalData.userInfo.signature,
				// 	contentType: 'text',
				// 	content: this.value,
				// 	time: new Date()
				// }).then(res => {
				// 	this.value = ''
				// 	this.queryTreeholeList()
				// })
				uniCloud.callFunction({
					name: 'addTreehole',
					data: {
						userid: getApp().globalData.userInfo.signature,
						contentType: 'text',
						content: this.value,
						time: new Date().toLocaleString('zh', { year: 'numeric', month: '2-digit', day: '2-digit'}) + " " + new Date().toTimeString().slice(0,8)
					}
				}).then(res => {
					uni.showToast({
						title: '留言成功',
						duration: 2000
					})
					this.value = ""
					this.pageNum = 0
					this.msgList.length = 0
					this.queryTreeholeList()
				})
			},
			onKeyInput(event) {
				this.value = event.target.value
			},
			// 数据补录
			signup() {
				let time = new Date().toLocaleString().slice(0, 10) + " " + new Date().toString().slice(16, 24)
			}
		}
	}
</script>

<style lang="scss">
	.treehole {
		padding-bottom: 70px;

		.block {
			padding: 10px;
			border-bottom: 1px solid #ccc;

			// &:last-child {
			// 	margin-bottom: 71px;
			// }
		}

		.floor {
			display: inline-block;
			font-size: 14px;
			margin-right: 10px;
		}

		.content {
			margin: 4px 0;
			color: #666;
			font-size: 14px;
		}

		.time {
			color: #ccc;
			font-size: 12px;
		}

		.inputRoom {
			width: 750rpx;
			height: 60px;
			padding-bottom: 10px;
			border-top: 1px solid #cdcdcd;
			background-color: #f1f1f1;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			z-index: 20;
		}

		input {
			width: 630rpx;
			height: 42px;
			background-color: #fff;
			border-radius: 40rpx;
			margin-left: 35rpx;
			padding: 0 25rpx;
			font-size: 18px;
			color: #444;
		}

	}
</style>
