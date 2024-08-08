import {useParams} from "react-router-dom"

function Detail(){
    const {id} = useParams();
    const getDetail = async() => {
        const response = await fetch(
            "https://yts.mx/api/v2/movie_details.json?movie_id=" + id
        );

        const json = response.json();
        
    }

    return (
        <h1> {id} 상세로 들어왔다.</h1>
    );
}

export default Detail;