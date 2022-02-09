import React, {useState, useEffect} from 'react'
import './MovieRow.css'
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from 'axios'



export default ({items, title})=>{

    const [scrollX, setScrollX] = useState(0) 

    const [movies, setMovies] = useState([]);
    const [trailerPath, setTrailerPath] = useState('');
    const [description, setDescription] = useState('');
    const [titler, setTitler] = useState('');
    const [original_title, setOriginal_title] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(items.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [items.fetchUrl]) 

    const opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          modestbranding: 1,
          controls: 0,
        },
    };


    const handleLeftArrow = () => {
        let x =  scrollX + Math.round (window.innerWidth / 2) //valor a ser mandado por click é metade do tmaanho da window do user
        if(x>0){  // para limitar até ao 0, senao continuava a andar para a esq infinit...
            x=0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x =  scrollX - Math.round (window.innerWidth / 2)
        let listW = items.results.length * 150   // descobrir a largura através da quantidade de items * a largura de cada um deles
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60 //nao esquecer os 60 da margin
        }
        setScrollX(x) 
    }

    const handleClick = (movie) => {
        if (trailerPath === '') {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title).then((response) => {
                const path = response.split('?v=')[1];
                setTrailerPath(path);
                document.querySelector('body').style.overflow = 'hidden';
                setDescription(movie?.overview);
                setTitler(movie?.name || movie?.title);
                setOriginal_title(movie?.original_name);
            }).catch((error) => {
                handleError();
                console.log(error);
            })
        } else {
            setTrailerPath('');
            setDescription('');
            setTitler('');
            setOriginal_title('');
            document.querySelector('body').style.overflow = 'auto';
        }
    }


    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            
            <div className='movieRow--left'onClick={handleLeftArrow}>
                <RowingOutlinedIcon style={{fontSize: 35}} />
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <RowingOutlinedIcon style={{fontSize: 35}} />
            </div>
            


            <div className='movieRow--listarea' >
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                    }}>
                    {items.results.length>0 && items.results.map((item,key)=>(
                    
                    <div key={key} className='movieRow--item'>
                        
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt ={item.original_title} onClick={() => handleClick(item)}/>   
                    </div> // tamanho da imagem do poster a weight 300
                   
                 
                ))}
                {trailerPath && <div className="info__overlay" onClick={() => handleClick(null)}>
                                    <div className="info__overlay--contentBox" onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleClick(null)} className="info__overlay--btnClose fa-stack fa-2x">
                                            <i className="fas fa-circle fa-stack-2x icon-black"></i>
                                            <i className="fas fa-times fa-stack-1x icon-white"></i>
                                        </span>
                                        <div className="info__overlay--videoBox">
                                            <YouTube className="info__overlay--youtube" videoId={trailerPath} opts={opts} />
                                            <div className="info__overlay--iconBox">
                                                <button className="info__button info__button--play"><i className="fas fa-play"></i><span>Play</span></button>
                                                <span className="fa-stack fa-2x info__icon">
                                                    <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                    <i className="fas fa-plus fa-stack-1x icon-white"></i>
                                                </span>
                                                <span className="fa-stack fa-2x info__icon">
                                                    <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                    <i className="far fa-thumbs-up fa-stack-1x icon-white"></i>
                                                </span>
                                                <span className="fa-stack fa-2x info__icon">
                                                    <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                    <i className="far fa-thumbs-down fa-stack-1x icon-white"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="info__overlay--text">
                                            <h1>{title}</h1>
                                            <h2>{original_title ? `(${original_title})` : ''}</h2>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                }
                </div>
            </div>
        </div>
    )
}
export const handleError = function() {
    const html = `
    <div class="error">
        <div class="error__text">
            <p class="error__heading">Error:</p>
            <p class="error__description">Can't find trailer, please try another title!</p>
        </div>
    </div>
    `
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', html);
    const error = body.querySelector('.error');
    error.classList.add('fade-in');

    setTimeout(function() {
        // error.classList.remove('fade-in');
        error.classList.add('fade-out');
        setTimeout(function() {
            error.remove();
        }, 500)
    }, 2500)
}