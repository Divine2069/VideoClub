import React from 'react'
import './MovieRow.css'
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined'


export default ({title, items})=>{
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            
            <div className='movieRow--left'>
                <img src='https://files.fm/thumb_show.php?i=sycmt2hdk' />
            </div>

            <div className='movieRow--right'>
                <RowingOutlinedIcon style={{fontSize: '35'}} />
            </div>
            


            <div className='movieRow--listarea'>
                <div className='movieRow--list'>
                    {items.results.length>0 && items.results.map((item,key)=>(
                    
                    <div key={key} className='movieRow--item'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt ={item.original_title} />   
                    </div> // tamanho da imagem do poster a weight 300
                   
                 
                ))}
                </div>
            </div>
        </div>
    )
}