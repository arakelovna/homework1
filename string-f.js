const string = "Привет, как дела?"

const vowels = ["а", "е","ё", "ы", "и", "о", "ю", "я", "у"];


const getVowels = stringToFilter => {
    let extractedVowels = "";
    for (let i=0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if ( vowels.indexOf(currentLetter) !== -1 ) {
            extractedVowels += currentLetter;
        }

    }
    return extractedVowels ;

}

console.log(getVowels(string))