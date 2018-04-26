// 下面都是由get搞的页面路由跳转

app.get('/getInfo',function(req,res){

// 输出json

  var _res = {

    'f': req.query.first_name ,

    'l': req.query.last_name

  }

  console.log( _res );

  res.end( JSON.stringify(_res) );

});
