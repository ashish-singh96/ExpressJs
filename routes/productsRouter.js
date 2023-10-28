const router=require('express').Router();

router.get('/products',(req,res)=>{
    res.render('products',{
        title:"my products page"
    })
})

module.exports=router;