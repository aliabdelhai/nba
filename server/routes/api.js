const express = require('express')
const router = express.Router()
const NbaPlayer = require('../models/NbaPlayer');
const axios = require('axios')

router.get('/players', async (req, res ) => {
    try{
        console.log('haha')
        const players = await NbaPlayer.find({})
        res.send(players)
    }
    catch(error){
        req.send(err)

    }
})

router.post('/player', async (req, res ) => {
    try{
        const player = new NbaPlayer(req.body.player)
        await player.save()
        res.send(player)
    }
    catch(error){
        res.send(error)

    }
})


router.delete('/player/:id', async (req, res ) => {
    const id = req.params.id
    try{
        const playerName = await NbaPlayer.findOneAndDelete({_id: id})
        res.send(playerName)
    }
    catch(error){
        res.send(error)

    }
})


module.exports = router


