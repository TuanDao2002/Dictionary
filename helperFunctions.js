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
        const len = res[0].meanings.length;
    
        for (let i = 0; i < len; i++){
            const partOfSpeech = res[0].meanings[i].partOfSpeech;
            wordDefinitions.push(`<p id="partOfSpeech">+ ${partOfSpeech}:</p>`);
            const definitions = res[0].meanings[i].definitions;
            definitionsArray = []
            definitions.forEach(element => {
                definitionsArray.push(`<p>--> ${element.definition}<p>`);
            });
            definitionsArray = definitionsArray.join("")
            wordDefinitions.push(definitionsArray);
        }
    
        wordDefinitions = wordDefinitions.join("")
        responseField.innerHTML = `<p id="def">Definition</p><ul>${wordDefinitions}</ul>`;
        console.log(res[0].word);
    }
    
}

