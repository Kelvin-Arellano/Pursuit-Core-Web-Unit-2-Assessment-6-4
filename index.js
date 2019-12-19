document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select")
    const getMovieNames = async () =>{
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let movies = res.data
            movies.forEach(movie=>{
                let list 

            })
            debugger

        }catch(err){
            console.log(err)
            debugger
        }
    }
    getMovieNames()
})
//form on submit addReview() and return false
//select on change displayMovieInfo()