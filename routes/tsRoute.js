const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    let currentYear = Date.now(s=> new Date().getFullYear());
    res.render('index', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

router.get('/about', (req, res)=>{
    let currentYear = Date.now(s=> new Date().getFullYear());
    res.render('about', { title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

router.get('/contact', (req, res)=>{
    let currentYear = Date.now(s=> new Date().getFullYear());
    res.render('contact', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined", submitted: false})
})

router.get('/services', (req, res)=>{
    let currentYear = Date.now(s=> new Date().getFullYear());
    res.render('services', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

router.get('/header', (req, res)=>{
    let currentYear = Date.now(s=> new Date().getFullYear());
    res.render('./partials/header', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

// router.get('/services', (req, res)=>{
//     res.render('services', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
// })

module.exports = router