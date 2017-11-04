import Mock from 'mockjs';
(function(){
  if(typeof process.env.NODE_ENV === 'undefined'){
    Mock.setup({timeout: '800-1200'})
    Mock.mock('/data',{
      data:{
        name:'John'
      }
    })
  }
})()
/* );

Mock.mock(); */