document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select")
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
                select.appendChild(option)

            })
        }catch(err){
            console.log(err)
        }
    }
    const displayMovieInfo = async (url) =>{
        try{
           let result = await axios.get`https://ghibliapi.herokuapp.com/films/${id}`
           let movieInfo = result.data

           let title = document.createElement("h3")
           title.className = "title"
           title.innerText = movie.title
           content.appendChild(title)

           let releaseDate = document.createElement("p")
           releaseDate.className = "releaseDate"
           releaseDate.innerText = movie.release_date
           content.appendChild(releaseDate)

           let description = document.createElement("p")
           description.className = "description"
           description.innerText = movie.description
           content.appendChild(description)
        }catch(err){
            console.log(err)
        }
    }

    const postReview = (review) => {
        let li = document.createElement("li")
        let title = socument.createElement("b")
        title.innerText = select.options[select.SelectedIndex].text + ": "
        let post = document.createElement("p")
        li.innerText = review
        li.className = "reviews"
        li.prepend(title)
        submissions.appendChild(li)

    }
   
    select.addEventListener("change", (event)=>{
        displayMovieInfo(event.target.value)
        ul.innerHTML = ""
        review.innerHTML = ""
        displayMovieInfo(event.target.value)

    })

    form.addEventListener(submit, (event) => {
        event.preventDefault()
        postReview(userInput.value)
    })
    getMovieNames()
})