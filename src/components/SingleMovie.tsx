import { MovieData } from "../interfaces/interface"


const SingleMovie: React.FC<{data: MovieData }> = ({ data  }) => {
   const { id,
    original_title,
    popularity,
    vote_average,
    backdrop_path,
    poster_path,
} = data
return (
    <main className="flex flex-col w-20vw h-30vh rounded-md overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" className="w-full h-full object-cover rounded-md"/>
        <div>{original_title}</div>
    </main>
)
}

export default SingleMovie