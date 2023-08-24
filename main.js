let catQuote = document.querySelector('p');
let myLoading = document.querySelector('h3');
let myError = document.querySelector('h4');
// The link of the API endpoint to fetch a random joke
const apiUrl = 'https://catfact.ninja/fact';
async function generateCatApi() {
    try{
        // get datas from the API
        const request = await fetch(apiUrl);
        let response = await request.json();
        catQuote.textContent = response.fact;
        factLength = response.fact.length;
        removeCustomError();
        removeLoading();
    }
    catch(error){
        myError.textContent="Failed to load, Please check your internet connection, and try again.";
        myLoading.textContent = ""
    }
}
// function to set time out base on reading length 
// const readingLength = factLength.length
const readingTime = () => {
    if (factLength <= 15){
        setTimeout(() => {
            generateCatApi()
         }, 4000);
    }else if((factLength > 15)&&(readingLength <= 25)){
            setTimeout(() => {
                generateCatApi()
             }, 7000);
}}

const removeCustomError = () => {
if(catQuote.textContent !== ""){
myError.textContent = ""
}
}


const loading = () => {
    myLoading.textContent = catQuote.textContent === "" ? "loading..." : "";
}
loading()

const removeLoading = () => {
!(loading())
}





// generate quote when browser loads 
startEvent = () => {
        document.addEventListener('DOMContentLoaded', generateCatApi());
}
setInterval(() => {
    startEvent()
    }, 5000);

