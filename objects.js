const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {"name":"Ann","salary":1200},
    {"name":"Bill","salary":700},
    {"name":"Bob","salary":2000},
    {"name":"Sid","salary":3000},
    {"name":"Karl","salary":700},];
var array=[];//не всплывает из функции,если не объявить.Почему?

function getWorthyWorkers (workers) {

for (var i = 0; i<=workers.length-1; i++) {
    if (workers[i].salary > 1000)
    array.push(workers[i]);}
    return array;}

var result = getWorthyWorkers (workers);
console.log(result);
