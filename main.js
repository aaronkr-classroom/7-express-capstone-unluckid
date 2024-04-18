// main.js
// Capstone 2: Express
"use strict";
//상수나 변수 모두 정의 (const)
// 3000번 포트로 리스닝 설정
const port =3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController =require('./controllers/homeController'),
    errorController= require('./controllers/errorController'),
    app = express();
    //2단계 앱 설정( set함수, use함수)
    app.set("port",process.env.PORT ||port);
    app.set("view engine","ejs");
    
    app.use(layouts);
    app.use(express.static("public"));
    // 바꿀 내용]
    
    app.get("/name/:job?", homeController.getindex);
    app.get("/contact",homeController.getcontact);
    app.get("/thanks",homeController.getthanks);
    app.get("/courses", homeController.getcourses);
    app.get("/",homeController.gethome);
    app.get("/test", (req,res)=>{
        
        res.sendFile(`./public/test.html`,{
            root:'./'
       });
    });

    app.use(errorController.logErrors);
    app.use(errorController.resNotFound);
    app.use(errorController.resInternalError);

    //마지막 listen 함수
    app.listen(app.get("port"),() => {
        console.log(`Server at: http://localhost:${app.get("port")}`);
    });