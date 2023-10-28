const express=require("express");
const path = require('path');
const app=express();
const mainRouter=require('./routes/index');
const productRouter=require('./routes/productsRouter');
const PORT=process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(mainRouter);
app.use(productRouter);

app.listen(PORT,()=>{
    console.log(`Server running as port ${PORT}`)
})