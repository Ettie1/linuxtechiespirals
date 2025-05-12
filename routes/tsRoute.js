const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index', {title: "TECHIESpirals Digital", metaDescription: "defined"})
})

router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/contact', (req, res)=>{
    res.render('contact', {submitted: true })
})

module.exports = router