const express = require('express');
const app = express();

app.get('/',function(){
  console.log('hiii')
})

app.listen(3000, function() {
  console.log('Running !!!!')
})
