const express = require('express');
const router = express.Router();
const fs = require("fs"); 

// const path = require("path"); // 쓸 줄 모름
const usePath = '/Users/shinseungmi/home/pagediv/frontend/src/Use';

router.get('/', (req, res)=>{
    var dir = fs.readdirSync(usePath + "/seminarUse/"); // 디렉토리를 읽어온다
    var itemEnt = {};
    var seminarEnt = {};
    var seminarArray = [];

    for (let i = 1; i < dir.length; i++) {
        var dirFile = fs.readdirSync(usePath + "/seminarUse/" + dir[i]); // 디렉토리를 읽어온다
        itemEnt.year = dir[i].slice(0, 4);
        itemEnt.date = dir[i].slice(2, dir[i].length);
        itemEnt.paper = '[link]';
        itemEnt.slides = '[link]';

        // ppt 갯수
        for (let i = 0; i < dirFile.length; i++) {
            var file = dirFile[i]; // 폴더 내의 파일 이름들
            var index = file.lastIndexOf('.'); // 확장자 index
            var fileExtension = file.substr(index+1, file.length); // 확장자 추출
            if(fileExtension === 'pptx') {
                // 사람 이름
                var speakerIndex = file.indexOf('_');
                var speaker = file.substr(0, speakerIndex); // 사람 이름만 추출
                itemEnt.speaker = speaker;

                // 세미나 제목
                var titleIndex = file.lastIndexOf('_');
                var title = file.slice(speakerIndex+1, titleIndex); // 세미나 제목만 추출
                itemEnt.title = title;

                // 세미나 분야
                var areaIndex = file.indexOf('-');
                var area = file.slice(titleIndex+1, areaIndex); // 세미나 분야만 추출
                itemEnt.area = area;

                // 세미나 분야
                var source = file.slice(areaIndex+1, index); // 세미나 분야만 추출
                itemEnt.source = source;
                
                seminarArray.push({...itemEnt});
            }
        }
        seminarEnt.items = seminarArray;

        console.log(seminarEnt);
        res.send(seminarEnt);
    }
});

module.exports = router;