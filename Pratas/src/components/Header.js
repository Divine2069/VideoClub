import React from 'react'
import './Header.css'


export default ({black}) => {
    return (
       <header className={black ? 'black' : ''}>
           <div className='header--logo'>
               <a href='/'>
                   <img src="https://files.fm/thumb_show.php?i=56c7vb6sf" alt='logo grupo'/>
               </a>
            </div>
            <div className='header--marinha'>
                <a href='https://www.marinha.pt'>
                <img src='https://files.fm/thumb_show.php?i=7u2h5c8sh' alt='marinha'></img></a>
            </div>
       </header> 
    )
}