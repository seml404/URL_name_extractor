"use strict";


// VERSION 1 - REGEXP
function domainName(url) {
    return /(?<=\/\/|w{3}\.|^)(?!http|w{3}|\/\/)\S+?(?=\.)/iug.exec(url)[0];
}

// VERSION 2 - STRING AND REPLACE
function domainName(url) {
    return (url.replace("//www.", "").replace("www.", "").replace("https://", "").replace("http://", "").split(".")[0]);
}


console.log(domainName("www.xakep.ru"));
console.log(domainName("//www.t6knxkx2.co.za"));
console.log(domainName("http://google.com"));
console.log(domainName("https://www.w8nhaolb6ijcza70j0h3z0w.org/warez/"));
console.log(domainName("8vvtqgwjdipsktum21rb8v73l6a.io/warez/"));