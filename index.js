document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select")
    let url = "https://ghibliapi.herokuapp.com/films"
    const getMovieNames = async () =>{
        try {
            let res = await axios.get(url)
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
    const displayMovieInfo = async (url) =>{
        try{
            let res = await axios.get(url)
            let info = res.data;
            let descpt = document.qu
        }catch(err){
            console.log(err)
            debugger
        }
    }
    }
    getMovieNames()
    select.addEventListener("change", (event)=>{
        displayMovieInfo(event.target.value)
    })
})
//form on submit addReview() and return false
//select on change displayMovieInfo()