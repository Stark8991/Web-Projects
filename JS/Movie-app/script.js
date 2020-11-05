// Popular list
// search by name

const search_field=document.getElementById("search")
const movie_field=document.getElementById("movie-field")

popular_list();
function list_items(results){
    removeallchildnodes();
    if(results!=null){
        results.forEach(data=>{
                let movies=document.createElement("div")
                movies.classList.add("movies")
                let vote=data.vote_average;
                let style=null;
                if(vote<5){
                    style="red"
                }
                else if(vote>=5 && vote<8){
                    style="yellow"
                }
                else{
                    style="green"
                }
                movies.innerHTML=`
                <img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="">
                        <div class="info-field">
                            <h3 class="name">${data.title}</h3>
                            <span class="${style}">${vote}</span>
                        </div>
                        <div class="about-movie">
                            <h3>overview: ${data.overview}</h3> 
                        </div>
                `
                movie_field.appendChild(movies);
                 
        })
        let overviews=movie_field.querySelectorAll(".movies");
        overviews.forEach(overview=>{
            console.log(overview)
            overview.addEventListener("click",()=>{
                let a=overview.querySelector(".about-movie")
            a.classList.toggle("about-movie-overview")
        })
        })

    }
    else{
        return;
    }
}

// popular movies
async function popular_list(){
    const movies_fetch =await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b51aab8381d823dd467803c9490890e9&language=en-US&page=1");

    const movies_list=await movies_fetch.json();
    // console.log(movies_list.results)

      list_items(movies_list.results);
    
}

search_field.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
    let value=search_field.value
    movies_by_search(value)
    search_field.value=""
    }
    else{}
    
})

async function movies_by_search(search){
    let res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b51aab8381d823dd467803c9490890e9&language=en-US&query=${search}&page=1&include_adult=true`)

    let data= await res.json();
    list_items(data.results);
}

function removeallchildnodes(){
        while(movie_field.firstChild){
            movie_field.removeChild(movie_field.firstChild)
        }
    
}


