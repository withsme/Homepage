const express = require('express');
const router = express.Router();
const xlsx = require( "xlsx" );

const usePath = 'C:/home/Homepage/frontend/src/Use';
const excelFile = xlsx.readFile(usePath + '/publicationUse/publication.xlsx');

router.get('/', (req, res)=>{
    const sheetName = {}; // 시트 이름
    const sheet = {}; // 시트 내용
    let length = excelFile.SheetNames.length;

    while (length --) {
        const sheetname = excelFile.SheetNames[length];
        sheetName[length] = sheetname;
        sheet[sheetname] = xlsx.utils.sheet_to_json(excelFile.Sheets[sheetname]);
    }

    // console.log(sheet);
    res.send(sheet);
});

module.exports = router;