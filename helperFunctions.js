const render = (res) => {
    if(!res){
        console.log(res.status);
    }

    if(!res.length){
        responseField.innerHTML = "<p>Try again!</p><p>There is no definition for this word</p>";
    }

    let wordDefinitions = [];
    const len = res[0].meanings.length;

    for (let i = 0; i < len; i++){
        wordDefinitions.push(`<li>${res[0].meanings[i].definitions[0].definition}</li>`);
    }

    wordDefinitions = wordDefinitions.join("")
    responseField.innerHTML = `<p>Definition:</p><ul>${wordDefinitions}</ul>`;
}

