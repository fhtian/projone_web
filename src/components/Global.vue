<script type="text/javascript">

    const prefix_url='https://www.tcjfh.cn/';
    let self = this
    function  openDialog_(msg,self){

       self.$confirm(msg, '一键复制>打开淘宝APP，领取优惠券', {
          distinguishCancelAndClose: true,
          confirmButtonText: '一键复制吱口令',
        //   cancelButtonText: '放弃修改',
          showCancelButton:false
        })
          .then(() => {
            console.log(msg);
            self.$copyText(msg);
            self.$message({
              type: 'info',
              message: '复制成功'
              
            });
          })
        //   .catch(action => {
        //     self.$message({
        //       type: 'info',
        //       message: action === 'cancel'
        //         ? '放弃保存并离开页面'
        //         : '停留在当前页面'
        //     })
        //   })
          ;
       
		};
    function  copyContent(msg,self) {
        self.$copyText(msg).then(function (e) {
          alert('Copied')
          console.log(e)
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
      
    }
    
    
    export default {
       prefix_url,
       openDialog_
    }
    

    
</script>
