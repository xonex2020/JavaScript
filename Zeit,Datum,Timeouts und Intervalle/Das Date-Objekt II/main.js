"use strict";

let d = new Date();

d.setFullYear(1993);
d.setMonth(0);
d.setDate(16);
d.setHours(9);
d.setMinutes(32);
d.setSeconds(22);
d.setMilliseconds(23);


console.log(d);

d.getFullYear(1993);
d.getMonth(0);
d.getDate(16);
d.getHours(9);
d.getMinutes(32);
d.getSeconds(22);
d.getMilliseconds(23);


let d_utc = new Date();

d_utc.setUTCFullYear(1993);
d_utc.setUTCMonth(0);
d_utc.setUTCDate(16);
d_utc.setUTCHours(9);
d_utc.setUTCMinutes(32);
d_utc.setUTCSeconds(22);
d_utc.setUTCMilliseconds(23);

console.log(d_utc);


d.getUTCFullYear(1993);
d.getUTCMonth(0);
d.getUTCDate(16);
d.getUTCHours(9);
d.getUTCMinutes(32);
d.getUTCSeconds(22);
d.getUTCMilliseconds(23);


let d_unix = new Date();

d_unix.setTime(156855700000);
console.log(d_unix);
console.log(d.unix.getTime());