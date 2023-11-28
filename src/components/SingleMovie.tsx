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
    <main className="singleMovieContainer">
        <div>{original_title}</div>
    </main>
)
}

export default SingleMovie