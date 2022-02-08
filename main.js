"use strict";

const parameter = location.search; // ?hoge=0

const convert_parameter = (p) => {
    if(p === ""){ return null };
    const noQues = p.substring(1); // hoge=0
    if (noQues.indexOf('&') != -1) {
        console.log("noQues: ");
        console.log(noQues);
        return noQues.split("&");
    } else {
        return [noQues];
    }
}

const convert_to_html = (ps) => {
    return ps.map((p) => {
        const temp = p.split("=");
        return "<p>" + temp[0] + ": " + temp[1] + "</p>";
    });
}

const box = document.getElementById("box");

const ps = convert_parameter(parameter);
const str = convert_to_html(ps).join();

box.innerHTML = str.replace(/,/g, "");