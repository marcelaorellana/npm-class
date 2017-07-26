//console.log(process.argv);
var fs = require('fs');
//var str = fs.readFileSync(process.argv[2]);
  
var str = fs.readFileSync(process.argv[2], 'utf8');
str = str.replace(/\n+$/, '');
str = str.split('\n');
var num = str.length-1;

console.log(num);
