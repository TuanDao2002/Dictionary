const url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const getDefinitions = () => {
    const wordQuery = inputField.value;
    const endpoint = url + wordQuery;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE){
            render(xhr.response);
        }
    };
    xhr.open('GET', endpoint);
    xhr.send();
}


const display = (event) => {
    event.preventDefault();
    let child = responseField.lastElementChild;
    while (child && child.id !== "def") {
        responseField.removeChild(child);
        child = responseField.lastElementChild;
    }

    getDefinitions();
}

submit.addEventListener('click', display)