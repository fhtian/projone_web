<template>
    <div  v-loading.fullscreen.lock='loading'  element-loading-text="拼命加载中">
        
		<router-link to="/home/search">
			<el-input
				placeholder="输入淘宝商品名称领取优惠券"			
				class="search">
			</el-input>
			<span class="el-icon-search" ></span>
		</router-link>

        <el-row>
        <el-col :span="8" v-for="item in shoppList" :key="item.pict_url" >
            <div  @click="global_.openDialog_('一键复制>打开淘宝，即可领取优惠券啦。。'+item.tbk_tpwd_create_response.data.model,self)">
            <el-card :body-style="{ padding: '0px' }" >
            <img :src="item.pict_url"  class="image">
            <div style="padding: 14px;">
                <span class="title">{{item.title}}</span>
                <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <span class="buy"
                    
                    >券后价￥{{item.zk_final_price}}元  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  领券购买</span>
                    <!-- <span class="buy">领券购买</span> -->
                    <!-- <el-button type="text" class="button"
                    @click="global_.openDialog_('一键复制>打开淘宝，即可领取优惠券啦。。'+item.tbk_tpwd_create_response.data.model,self)"
                >领券购买</el-button> -->
                </div>
            </div>
            </el-card>
            </div>
        </el-col>
        </el-row>

    </div> 
       
</template>

<script>
export default {
      data(){
        return { 
            material_id:0,//默认女装
            currentDate: new Date(),
            shoppList:[],
            loading:false,
            self:this
           
        }

    },
    created(){
        this.shopping();
    },
    methods:{
        shopping(){
            this.loading = true
            if(this.$route.fullPath==='/home/girlsSkirt'){
                this.material_id = 9658;
            }else  if(this.$route.fullPath==='/home/computer'){
                this.material_id = 3793;
            }else  if(this.$route.fullPath==='/home/makeup'){
                this.material_id = 9653;
            }else  if(this.$route.fullPath==='/home/underwear'){
                this.material_id = 9642;
            }
			var data = {
				"material_id": this.material_id,
				"page_no": 0,
				"page_size": 10
				};
			var url = 'tbk/taobao_tbk_dg_optimus_material';
			this.$http.post(url,JSON.stringify(data)).then(result =>{
                this.shoppList = result.body;
                this.loading = false
                console.log(this.shoppList);
                console.log(this.$route.params.path);
                console.log( this.$route.query.gid);
                console.log(this.$route.fullPath)
				});

        },
        search(){

        }
    }
}
</script>
<style lang="scss" scoped>
.buy{
	position: absolute;
	color: #f10215;
	top: 210px;
	right: 0px;
}
.el-icon-search{
  	position: absolute;
	top: 60px;
	right: 20px;
	color: #ccc;
}
.el-col-8 {
    width: 50%;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
    .title{
        overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>

