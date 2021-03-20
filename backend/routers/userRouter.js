const router =require('express').Router()
router.post('/register',(req,res)=>{
    res.join({msg:"test router"})
})

module.exports = router