import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

function Detail(){
    const {id} = useParams();
    const [movieDetail, setMovieDetail] = useState([]);
    const getDetail = async() => {
        const response = await fetch(
            "https://yts.mx/api/v2/movie_details.json?movie_id=" + id
        );
        const json = await response.json();        
        setMovieDetail(json.data.movie);
    }

    useEffect(()=>{
        getDetail();
    }, []);

    return (
        <>
        <h1> {movieDetail.title}</h1>
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th>항목</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>year</td>
                    <td>{movieDetail.year}</td>
                </tr>
                <tr>
                    <td>runtime</td>
                    <td>{movieDetail.runtime}</td>
                </tr>
            </tbody>
        </table>

        
        </>
    );




}

export default Detail;