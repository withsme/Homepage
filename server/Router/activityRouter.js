const express = require('express');
const router = express.Router();
const fs = require("fs"); 

// const path = require("path"); // 쓸 줄 모름
const usePath = 'C:/home/Homepage/frontend/src/img';

router.get('/', (req, res)=>{
    var dir = fs.readdirSync(usePath + "/activityImg"); // 디렉토리를 읽어온다

    var itemEnt = {};
    var nameEnt = {};
    var nameArray = [];
    for (let i = 0; i < dir.length; i++) {
        var file = dir[i];

        // 파일 이름
        var index = file.indexOf('.');
        var fileName = file.substr(0, index); // 파일 이름만 추출
        itemEnt.id = JSON.stringify(i + 1); // string으로 변환
        itemEnt.name = fileName;

        // 파일 경로
        var filePath = dir[i];
        itemEnt.path = filePath;

        // 파일 생성 날짜
        var fileInfo = fs.statSync(usePath + "/activityImg/" + file);
        var date = (JSON.stringify(fileInfo.birthtime)).substr(1, 10); // 날짜만 추출
        itemEnt.date = date.replaceAll('-', '.');
        
        nameArray.push({...itemEnt});
    }
    nameEnt.items = nameArray;

    console.log(nameEnt);
    res.send(nameEnt);
});

module.exports = router;