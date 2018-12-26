<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imags" :key="item.img">
                <img :src="item.img" width="100%">
            </mt-swipe-item>
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
    </div>
</template>
<script>

export default {
     data(){
        return {
            imags:[
                {img:"../../src/lib/img/1.jpg"},
                {img:"../../src/lib/img/2.jpg"},
                {img:"../../src/lib/img/3.jpg"}
            ]

        }

    }
    
}

</script>
<style lang="scss" scoped>

.mint-swipe{
    height: 200px;
    background: blue;
}
.mui-grid-view.mui-grid-9{
	background: white
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:0
}
</style>
