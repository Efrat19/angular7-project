require('express');
let middlewares=express();
middlewares.use((req,res,next)=>{
       console.log(middlewares);
       next();
})
middlewares.use((req,res,next)=>{
        res.send();
})
module.exports=middlewares;