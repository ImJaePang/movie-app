function Movies ({id, title, rating, mediumCoverImage, summary, genres}){

    return (
    <div>
        <h2>{title}, rating: {rating}</h2>
        <img src={mediumCoverImage} alt={title} />
        <p>{summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    )
}

export default Movies;