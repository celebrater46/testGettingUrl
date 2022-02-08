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

const convert_to_html = (ps) => {
    return ps.map((p) => {
        const temp = p.split("=");
        return "<p>" + temp[0] + ": " + temp[1] + "</p>";
    });
}

// console.log(parameter);
// console.log(convert_parameter(parameter));

const box = document.getElementById("box");

const ps = convert_parameter(parameter);
const str = convert_to_html(ps).join();
// console.log(convert_to_html(ps).join());
// box.innerHTML = convert_to_html(ps);
// console.log(str.replace(",", ""));
// console.log(str.replace(/,/g, ""));
// box.innerHTML = str.replace(",", "");
box.innerHTML = str.replace(/,/g, "");