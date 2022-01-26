const string = "Привет! как дела?";
var array=[];

function getVowels(string) {

    for (var i = 0; i<=string.length-1; i++) {
        if (string.charAt(i)=="а" || string.charAt(i)=="е" || string.charAt(i)=="и" || string.charAt(i)=="о" || string.charAt(i)=="э" || string.charAt(i)=="ю" || string.charAt(i)=="я")
            array.push (string.charAt(i));

    }
    return array;}

var result = getVowels(string);
console.log(result);
