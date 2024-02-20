const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
//
const cron = require('node-cron')

//Login Router
// router.post('/login',(req,res,next)=>{

//     userController.saveUser(req)
//     .then(resp=>{
//         res.send(resp)
//     })
//     .catch(err=>{
//         res.status(500).send(err)
//     })

// })


//Weeekly Activity 
router.get('/weeklyactivity',(req,res,next)=>{

    userController.weeklyactivity(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})

//Monthly Activity
router.get('/monthlyactivity',(req,res,next)=>{

    userController.monthlyactivity(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})


//Add water
router.post('/addwater',(req,res,next)=>{

    userController.addwater(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})

//Add exercise 
router.post('/addexercise',(req,res,next)=>{

    userController.addexercise(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})



router.post('/addmeditation',(req,res,next)=>{

    userController.addmeditaton(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})


router.post('/addmood',(req,res,next)=>{

    userController.addmood(req)
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.status(500).send(err)
    })


})


router.get('/badges',(req,res,next)=>{

    userController.getbadges(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})




router.get('/getinfo',(req,res,next)=>{

    userController.getinfo(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})




router.post('/editinfo',(req,res,next)=>{

    userController.editinfo(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})


router.get('/leaderboard',(req,res,next)=>{

    userController.leaderboard(req)

    .then(resp=>{
        res.send(resp)
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})

// router.get('/test',authenticate.authenticate,(req,res,next)=>{

//     userController.test(req)

//     .then(resp=>{
//         res.send(resp)
//     })

//     .catch(err=>{
//         res.status(500).send(err)
//     })
// })

module.exports = router