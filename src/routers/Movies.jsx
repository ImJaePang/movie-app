import { Link } from "react-router-dom";

function Movies ({id, title, rating, mediumCoverImage, summary, genres}){

    const linkPage = "/Detail/" + id;

    return (
    <div>
        <h2>{title}, rating: {rating}</h2>
        <Link to={linkPage}><img src={mediumCoverImage} alt={title} /></Link>
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    )
}

export default Movies;