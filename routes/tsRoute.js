const express = require('express')
const router = express.Router()


    let currentYear = new Date(Date.now()).getFullYear()

router.get('/', (req, res)=>{
     //|| "2025"
    res.render('index', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

router.get('/about', (req, res)=>{
    res.render('about', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

router.get('/contact', (req, res)=>{
    res.render('contact', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined", submitted: false})
})

router.get('/services', (req, res)=>{
    res.render('services', {title: "TECHIESpirals Digital",  currentYear: currentYear, metaDescription: "defined"})
})

// router.get('/header', (req, res)=>{
//     res.render('./partials/header', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
// })

// router.get('/services', (req, res)=>{
//     res.render('services', {title: "TECHIESpirals Digital",  currentYear: "2025", metaDescription: "defined"})
// })

module.exports = router