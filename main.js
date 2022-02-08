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

// console.log(parameter);
console.log(convert_parameter(parameter));

const box = document.getElementById("box");