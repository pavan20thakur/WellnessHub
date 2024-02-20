const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const cron = require('node-cron')
const CommunityGroup = require('../models/Community/communityGroups')
const UserProfile = require('../models/userProfile')
const { requireSignIn } = require('../middlewares/authMiddleware')


router.use(requireSignIn);

//Weeekly Activity 
router.get('/weeklyactivity', (req, res, next) => {
    userController.weeklyactivity(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })

})

//Monthly Activity
router.get('/monthlyactivity', (req, res, next) => {

    userController.monthlyactivity(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

//Add water
router.post('/addwater', (req, res, next) => {
    userController.addwater(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

//questionnaire
router.post("/submit-questionnaire", async (req, res) => {
    try {
        const id = req.user._id;
        const { feeling, stressLevel, } = req.body;

        const user = UserProfile.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update questionnaire responses
        user.feeling = req.body.feeling;
        user.stressLevel = req.body.stressLevel;

        // Save the updated user document
        await user.save();

        return res.status(200).json({ success: true, message: "Questionnaire responses saved successfully" });
    } catch (error) {
        console.error("Error submitting questionnaire:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/addexercise', (req, res, next) => {

    userController.addexercise(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.post('/addmeditation', (req, res, next) => {

    userController.addmeditaton(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.post('/addmood', (req, res, next) => {

    userController.addmood(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.get('/badges', (req, res, next) => {

    userController.getbadges(req)

        .then(resp => {
            res.send(resp)
        })

        .catch(err => {
            res.status(500).send(err)
        })
})

router.get('/getinfo', (req, res, next) => {

    userController.getinfo(req)

        .then(resp => {
            res.send(resp)
        })

        .catch(err => {
            res.status(500).send(err)
        })
})




router.post('/editinfo', (req, res, next) => {

    userController.editinfo(req)

        .then(resp => {
            res.send(resp)
        })

        .catch(err => {
            res.status(500).send(err)
        })
})

router.get('/leaderboard', (req, res, next) => {
    userController.leaderboard(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.get("/community", async (req, res) => {
    try {
        const id = req.user._id;
        
        const userprofile = await UserProfile.findOne({ userId: id });
        if (!userprofile) {
            res.status(500).send({
                sucess: false,
                message: "user not found"
            });
        }
        const community = [];

        const communityArray = userprofile.community;
        for (comm of communityArray) {
            community.push(await CommunityGroup.findOne(comm));
        }

        res.send({
            success: true,
            message: "Found User",
            community
        })
    } catch (error) {
        res.send({
            sucess: false,
            message: "error in getting communityx"
        })
    }
})

router.post("/create-community", async (req, res) => {
    const id = req.user._id;
    const { community_name, desc } = req.body;

    const userprofile = await UserProfile.findOne({ userId: id });

    if (!userprofile) {
        res.status(500).send({
            success: false,
            message: "user Does not Exists",
        });
    }

    const newCommunity = new CommunityGroup({
        name: community_name,
        description: desc
    });

    newCommunity.admins.push(id);
    await newCommunity.save();

    userprofile.community.push(newCommunity._id);
    await userprofile.save();
    res.send({
        success: true,
        message: "Community Created",
        newCommunity
    })

});



module.exports = router