const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    let currentYear = 2025;
    res.render('index', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
})

router.get('/about', (req, res)=>{
    res.render('about', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
})

router.get('/contact', (req, res)=>{
    res.render('contact', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined", submitted: false})
})

router.get('/services', (req, res)=>{
    res.render('services', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
})

module.exports = router