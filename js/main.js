const API_KEY = "UXpw14VAYoOxEXbnDy4EFTaKqC8jqy3U";
const URL_SEARCH = "https://api.giphy.com/v1/gifs/search";

const button = document.getElementById('sendButton');
const inputElement = document.getElementById('search');
const resulDiv = document.getElementById('main');

button.addEventListener("click", ()=>{
    const valorDeInput =  inputElement.value
    console.log('valor', valorDeInput);
    searchGif(valorDeInput);
});