document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("#select")
    let form = document.querySelector("form")
    let review = document.querySelector("#review")
    let ul = document.querySelector("ul")
    let textBox = document.querySelector("#textBox")
    
    const getMovieNames = async () =>{
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let movies = res.data
            movies.forEach(movie=>{
                let option = document.createElement("option")
                option.innerText=movie.title
                option.value=movie.id
                select.appendChild(option)
            })
        }catch(err){
            console.log(err)
        }
    }
    const displayMovieInfo = async(url) =>{
        try{
           let result = await axios.get("https://ghibliapi.herokuapp.com/films/"+url)
           let movieInfo = result.data

           let title = document.createElement("h3")
           title.className = "title"
           title.innerText = movieInfo.title
           review.appendChild(title)

           let releaseDate = document.createElement("p")
           releaseDate.className = "releaseDate"
           releaseDate.innerText = movieInfo.release_date
           review.appendChild(releaseDate)

           let description = document.createElement("p")
           description.className = "description"
           description.innerText = movieInfo.description
           review.appendChild(description)
        }catch(err){
            console.log(err)
        }
    }

    const postReview = () => {
        let li = document.createElement("li")
        let title = document.createElement("b")
        title.innerText = select.options[select.selectedIndex].text + ": "
        li.innerText = review
        li.className = "reviews"
        li.prepend(title)
        ul.appendChild(li)

    }
   
    select.addEventListener("change", (event)=>{
        ul.innerHTML = ""
        review.innerHTML = ""
        displayMovieInfo(event.currentTarget.value)

    })

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        postReview(textBox.value)
    })
    
    getMovieNames()

})