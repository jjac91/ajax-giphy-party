const gifArea = document.querySelector('#gif-area')
const sbtn = document.querySelector("#searchButton")
const input = document.querySelector("#search-term")
const rbtn = document.querySelector('#clear')
sbtn.addEventListener("click", function(e){
    e.preventDefault()
    getGif()
    input.value = ""
})

rbtn.addEventListener("click", function(e){
    e.preventDefault()
    gifArea.innerHTML =""
})

async function getGif(){
    let term = input.value
    
    let response = await axios.get ("https://api.giphy.com/v1/gifs/search",{params: {api_key: "6ELU5n4uDHVGr8fGo0Gif8V30qRSFnX8", q: term}})
    const url = response.data.data[0].images.original.url
    console.log(url)
    makeImg(url)
}

function makeImg(url){
    const img = document.createElement("img")
    img.setAttribute("src", url)
    console.log(img)
    console.log(gifArea)
    gifArea.append(img)
}