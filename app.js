let idx = 0
searchButton.addEventListener("click",function(e){
    let term = document.getElementById("search-term").value
    return term
})

$("form").on("submit",async function(e){
    e.preventDefault()
    let term = $("#search-term").val()
    
    let response = await axios.get ("https://api.giphy.com/v1/gifs/search",{params: {api_key: "6ELU5n4uDHVGr8fGo0Gif8V30qRSFnX8", q: term, limit: 1, offset:0, rating:"g", lang:"en" }})
    console.log(response.data[0])
    $("#gif-area").append(response.data[0])
})
//async function getGif(){let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6ELU5n4uDHVGr8fGo0Gif8V30qRSFnX8&q=${term}&limit=1&offset=0&rating=g&lang=en`)console.log(response)
//
//