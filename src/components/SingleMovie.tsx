import { useEffect } from 'react';
import { SingleMovieProps } from "../interfaces/interface";
import { BsPlusCircleFill } from "react-icons/bs";
import { PiMinusCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { StateMovieSection } from "../interfaces/interface";
import { useSelector } from "react-redux";

const SingleMovie: React.FC<SingleMovieProps> = ({ 
    data, 
    showSuccessMessage,
    showRemoveMessage,
    handleAddMovie,
    handleRemoveMovie,
    setShowSuccessMessage,
    setShowRemoveMessage
}) => {
    const { id, title, popularity, vote_average, vote_count, poster_path } = data;
    const roundedAverage = Number(vote_average).toFixed(2);
    const loggedUser = useSelector((state: StateMovieSection) => state.loggedUser.loggedUser);
    const selectedButton = useSelector((state: StateMovieSection) => state.moviesSort.selectedButton);

    const truncateText = (text: string, maxLength: number): string => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }

    const truncatedTitle = truncateText(title, 20);

    const handleAddToCollection = async () => {
        loggedUser && handleAddMovie(loggedUser, data);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    }

    const handleRemoveFromCollection = async () => {
        loggedUser && handleRemoveMovie(loggedUser, data);
        setShowRemoveMessage(true);
        setTimeout(() => {
            setShowRemoveMessage(false);
        }, 2000);
    }

    useEffect(() => {
        console.log("showSuccessMessage:", showSuccessMessage);
    }, [showSuccessMessage]);

    return (
        <>
            <main className="singleMovieContainer">
                <Link to={`/manager/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" title="click for details" />
                </Link>
                <div>{truncatedTitle}</div>
                <div className="singleMovieInfo">
                    <div>VOTE AVERAGE : {vote_average}</div>
                    <div>VOTE COUNT : {vote_count}</div>
                    <div>POPULARITY : {popularity}</div>
                </div>
                <span className="voteCircle">{roundedAverage}</span>
                {selectedButton === 'private' ? (
                    <PiMinusCircleFill
                        className="addRemoveMovie"
                        title="Remove movie from your collection"
                        style={{ color: 'var(--myColor8)' }}
                        onClick={handleRemoveFromCollection}
                    />
                ) : (
                    <BsPlusCircleFill
                        className="addRemoveMovie"
                        title="Add movie to your collection"
                        style={{ color: 'var(--myColor4)' }}
                        onClick={handleAddToCollection}
                    />
                )}
            </main>
            {showSuccessMessage && (
                <div className='addRemovePopUp'>
                    Movie successfully added
                </div>
            )}
            {showRemoveMessage && (
                <div className='addRemovePopUp'>
                    Movie successfully removed
                </div>
            )}
        </>
    );
}

export default SingleMovie;
