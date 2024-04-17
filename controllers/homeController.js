// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */


exports.getindex = (req,res,) =>{
    let paramsjob = req.params.job;
    let paramsName = req.params.name;
    res.render('index', { 
        name: paramsjob,
        content: paramsName});
}; // "/" index

exports.getContact = (req,res) =>{
    res.render('contact', { 
        name: paramsjob,
        content: paramsName});
} // "/contact" GET method

exports.getthanks = (req,res) =>{
    res.render('thanks', { 
        name: paramsjob,
        content: paramsName});
} // "/thanks" thanks method
exports.geterror = (req,res) =>{
    res.render('error', { 
        name: paramsjob,
        content: paramsName});
} // "/error" error method
exports.getcourses = (req,res) =>{
    res.render('courses', { 
        name: paramsjob,
        content: paramsName});
} // "/courses" courses method
/**
 * Listing 12.9 (p. 182)
 * 콘텐츠의 설정과 렌더링된 뷰에 전달
 * 
 * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
 * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
 */
