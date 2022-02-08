"use strict";

const parameter = location.search; // ?hoge=0

const convert_parameter = (p) => {
    if(p === ""){ return null };
    const noQues = p.substring(1); // hoge=0
    if (noQues.indexOf('&') != -1) {
        console.log("noQues: ");
        console.log(noQues);
        // return noQues.join("&"); // .join is "UNIFY AN ARRAY", Not separate
        return noQues.split("&");
    } else {
        return [noQues];
    }
}

// const convert_to_object = (ps) => {
//     let array = [];
//     return ps.map((p) => {
//         const temp = p.split("=");
//         const temp2 = String(temp[0]);
//         console.log("temp: ");
//         console.log(temp);
//         return { temp2 : temp[1]};
//     });
// }

// var result = items.map(function( value ) {
//
//     //配列の各要素を2倍にする
//     return value * 2;
//
// });

// console.log(parameter);
console.log(convert_parameter(parameter));
// console.log("convert_to_object(convert_parameter(parameter))");
// console.log(convert_to_object(convert_parameter(parameter)));

const box = document.getElementById("box");