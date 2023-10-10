let button =document.getElementById("button");

let instagramQuotes = [
    '"Get ready to be inspired"',
    '"You are a queen"',
    '"You are a king"',
    '"You are a god"',
    '"You are a goddess"',
    '"You are a legend"',
]



function katamaji(){
    const reviews = document.createElement("div");
    let random = Math.floor(Math.random() * instagramQuotes.length);
    reviews.textContent = instagramQuotes[random];
    document.body.appendChild(reviews);
}

button.addEventListener("click", katamaji);