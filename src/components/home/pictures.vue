<template>
    <div>
        <h3>2018瞬间</h3>
        <el-tabs type="border-card">
        <img v-for="item in imags"  :key="item.img" :src="item.img" width="100%">
        </el-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imags:[
				{img:this.global_.prefix_url+"lib/imags/20181228201351.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201426.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201435.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201439.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201444.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201449.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201454.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201500.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201504.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201508.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201512.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201517.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201521.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201525.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201530.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201534.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201538.jpg"},
                {img:this.global_.prefix_url+"lib/imags/20181228201541.jpg"}
            ]

        }

    }
}
</script>
<style lang="scss" scoped>

</style>
