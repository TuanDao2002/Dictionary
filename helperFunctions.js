const render = (res) => {
    if(!res){
        console.log(res.status);
    }

    if(!res.length){
        responseField.innerHTML = "<p id='warning'>Try again!</p><p id='warning'>There is no definition for this word</p>";
    }
    if (res[0].word === 'undefined'){
        responseField.innerHTML = "<p id='warning'>Try again!</p><p id='warning'>You have not typed a word</p>";
    } else {
        let wordDefinitions = [];
        res.forEach(dictionaryArray => {
            const len = dictionaryArray.meanings.length;
        
        for (let i = 0; i < len; i++){
            const partOfSpeech = dictionaryArray.meanings[i].partOfSpeech;
            wordDefinitions.push(`<p id="partOfSpeech">+ ${partOfSpeech}:</p>`);
            const definitions = dictionaryArray.meanings[i].definitions;
            definitionsArray = []
            definitions.forEach(element => {
                definitionsArray.push(`<p id="element">--> ${element.definition}<p>`);
            });
            definitionsArray = definitionsArray.join("")
            wordDefinitions.push(definitionsArray);
        }
        })
        
    
        wordDefinitions = wordDefinitions.join("")
        responseField.innerHTML = `<p id="def">Definition</p><ul>${wordDefinitions}</ul>`;
    }    
}

