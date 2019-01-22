<template>
  <div>
	<el-row>
		<el-col :span="24">
			<div class="header">
				<span class="title">
						七彩祥云
				</span>
				<a href="javascript:history.go(-1)" class="back el-icon-arrow-left">返回</a>
			</div>
		</el-col>
	</el-row>


    <!-- 中间的 路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>


    <!-- 底部-->
    <!-- <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/msg">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/self">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav> -->
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.header{
	height: 40px;
	background-color: #f10215;
	margin-bottom: 10px;
	position: relative;
}
.title{
	color:white;
	text-align: center;
	position: absolute;
	line-height: 40px;
	left:42%;
	font-size: 18px;
}
.back{
	color: white;
	line-height: 40px;
	padding-left:10px;
	font-size: 16px;
}
</style>
