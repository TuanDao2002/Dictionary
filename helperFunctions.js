const render = (res) => {
    if(!res){
        console.log(res.status);
    }

    if(!res.length){
        responseField.innerHTML = "<p>Try again!</p><p>There is no definition for this word</p>";
    }

    responseField.innerHTML = `<p>Definition:</p></p><p>${res[0].meanings[0].definitions[0].definition}</p>`;
}