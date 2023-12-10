const button = document.querySelector(".footer button"),
quote = document.querySelector(".quote"),
author = document.querySelector(".author h1"),
volume = document.querySelector(".fa-volume-high"),
copy = document.querySelector(".fa-copy"),
twitter = document.querySelector(".fa-twitter");

//Adding eventListeners for the buttons
button.addEventListener("click", changeQuote);
volume.addEventListener("click", ()=>{
    let speech = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speech.lang = "en";
    window.speechSynthesis.speak(speech);
});
copy.addEventListener("click", ()=>{
    window.navigator.clipboard.writeText(`${quote.innerText}`);
})
twitter.addEventListener("click", () =>{
    let url = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(url, "_blank");
})

//Function for creating new quotes
function changeQuote(){
    button.innerHTML = "Loading...";
    fetch("https://quotable.io/random").then(response=>response.json()).then(result=> {
        console.log(result.content);
        quote.innerHTML = result.content;
        author.innerHTML = result.author;
        button.innerHTML = "New Quote";
    });
}