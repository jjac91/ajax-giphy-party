const gifArea = $("#gif-area")
$("form").on("submit",async function(e){
    e.preventDefault()
    let term = $("#search-term").val()
    
    let response = await axios.get ("https://api.giphy.com/v1/gifs/search",{params: {api_key: "6ELU5n4uDHVGr8fGo0Gif8V30qRSFnX8", q: term}})
    console.log(response)
    const url = response.data.data[0].images.original.url
    makeImg(url)
})

function makeImg(url){
    const img = $("<img>", {src : url})
    console.log(img)
    gifArea.append(img)
}

$("#clear").on("click", function(e){
    e.preventDefault()
    gifArea.empty()
})