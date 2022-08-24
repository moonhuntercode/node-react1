const EXPRESS=require('express');
const PORT=process.env.PORT || 3001;
const APP=EXPRESS();
APP.get('/api',(req,res)=>{
    res.json({message:'Hi from server!!'});
})
// APP.get('/',(req,res)=>{
//     res.json('Hi everyone');
// })

APP.listen(PORT,()=>{
    console.log(`server escuchando en http://localhost:${PORT}/api`);
})