import axios from 'axios'
import React,{useEffect, useState} from 'react'

export default props => {
    const {title, description, imagePath, rating, id} = props;
    const [imdbId, setImdbId] = useState();
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e&language=en-US`)
            .then(res =>{
                console.log(res)
                setImdbId(res.data.imdb_id)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    const MovieBox = {
        height: '400px',
        width: '1000px',
        backgroundColor: 'white',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '10px',
    }
    const styleRating = {
        color: '#f5c71a',
        fontSize: '40px'
    }

    return(
        <div>
            <div className=' shadow mx-auto mt-5 p-3' style={MovieBox}>
                <div className='row'>
                    <div className='col'>
                        <img className="pic" src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt="Movie Poster" />
                    </div>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col'>
                                    <h2>{title}</h2>
                            </div>
                            <div className='col'>
                                <h4 style={styleRating}>{rating} <span>✯</span></h4>
                            </div>
                        </div>
                        <p className="description" >{description}</p>
                        <a href={`http://imdb.com/title/${imdbId}`} target="_blank"><img src="data:image/png;base64,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" class="imdb"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}