document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select")
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
            debugger
        }
    }
    const displayMovieInfo = async (url) =>{
        try{
            let movieInfo = document.getElementById("#content")
        //movieInfo.innerText=""
           let list = document.querySelector("select")
           let res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
           let decrypt = res.data
           debugger
        }catch(err){
            console.log(err)
            debugger
        }
    }

    getMovieNames()
   
    select.addEventListener("change", (event)=>{
        displayMovieInfo(event.target.value)
    })
})
//form on submit addReview() and return false
//select on change displayMovieInfo()