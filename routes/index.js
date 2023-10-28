const router=require('express').Router();
const apiKeyMiddleware=require('../middleware/apiKey');

router.get('/',(req,res)=>{ 
    res.render('index',{
        title:'my home page'
    })
})


router.get('/about',(req,res)=>{
    res.render('about',{
        title:"my about page"
    })
})

router.get('/download',(req,res)=>{
    // const filePath=(path.resolve(__dirname)+"/example.txt");
    // res.download(filePath,(err) => {
    //     if (err) {
    //       res.status(500).send('Error: Unable to download the file');
    //     }
    //   });
    res.download(path.resolve(__dirname)+'/example.txt')
})

router.get('/api/products',apiKeyMiddleware,(req,res)=>{
    res.json([
        {
            id:'1',
            name:"ashish"
        },
        {
            id:2,
            name:"Abhishek"
        }
    ])
})
module.exports=router;