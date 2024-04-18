// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */

exports.gethome = (req,res) =>{
    res.render('home');
} 
exports.getindex = (req,res) =>{
    let paramsjob = req.params.job;
    let paramsName = req.params.name;
    if (!paramsjob) {
        paramsjob = "학생";
    }
    res.render('index', { 
        name: paramsName,
        job: paramsjob});
        //바꾸려 했으나 오류가 나서 포기
}; // "/" index

exports.getcontact = (req,res) =>{
    res.render('contact');
} // "/contact" GET method

exports.getthanks = (req,res) =>{
    res.render('thanks');
} // "/thanks" thanks method


exports.getcourses = (req, res) => {
    res.render('courses');
}