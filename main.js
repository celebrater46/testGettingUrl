"use strict";

const href = location.href; // https://enin-world.sakura.ne.jp/index.php?hoge=0
const protocol = location.protocol; // https
const host = location.host; // enin-world.sakura.ne.jp:80
const hostname = location.hostname; // enin-world.sakura.ne.jp
const port = location.port; // 80
const pathname = location.pathname; // /index.php
const search = location.search; // ?hoge=0
const hash = location.hash; // #section=1

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
    if(ps === null){
        return ["<p>No value.</p>"];
    } else {
        return ps.map((p) => {
            const temp = p.split("=");
            return "<p>" + temp[0] + ": " + temp[1] + "</p>";
        });
    }
}

const box = document.getElementById("box");

const ps = convert_parameter(search);
// const ps = convert_parameter(location.search);
const str = convert_to_html(ps).join();

box.innerHTML = str.replace(/,/g, "");

console.log('href:' + location.href);
console.log('protocol:' + location.protocol);
console.log('host:' + location.host);
console.log('hostname:' + location.hostname);
console.log('port:' + location.port);
console.log('pathname:' + location.pathname);
console.log('search:' + location.search);
console.log('hash:' + location.hash);