import { MovieData } from "../interfaces/interface";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleMovie: React.FC<{data: MovieData }> = ({ data  }) => {
    const { id,
        title,
        popularity,
        vote_average,
        vote_count,
        poster_path,
    } = data

    const roundedAverage = Number(vote_average).toFixed(2);

    const truncateText = (text: string, maxLength: number): string => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }

    const truncatedTitle = truncateText(title, 20);

    return (
    <>
        <main className="singleMovieContainer">
        
            <Link to={`/manager/${id}`}>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" title="click for details"/>
            </Link>
            <div>{truncatedTitle}</div>
            <div className="singleMovieInfo">
                <div>VOTE AVERAGE : {vote_average}</div>
                <div>VOTE COUNT : {vote_count}</div>
                <div>POPULARITY : {popularity}</div>
            </div>
        <span className="voteCircle" >
            {roundedAverage}
        </span>
        <BsPlusCircleFill className="addMovie" title="Add movie to your collection" />
        </main>
    </>
)
}

export default SingleMovie