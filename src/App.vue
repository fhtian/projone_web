<template>
  <div class='app-container'>
   
    <mt-header fixed title="七彩祥云工作室">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
				</router-link>
			<!-- <mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
    <!-- 顶部-->




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
  .app-container{
     padding-top: 40px;
		 overflow-x: hidden;
  }
	
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
