//API
// import React, {useEffect, useState} from 'react' // useeffect quando a tela é carregada, ela executa a função - useState grava
// import '/Users/Hp/Desktop/EKP01/UFCD 0158 - Java Script/Exercicios/NetflixProject/VideoClub/Ribeiro/public/App.css'
// import Tmdb from './Tmdb'
// import MovieRow from '/Users/Hp/Desktop/EKP01/UFCD 0158 - Java Script/Exercicios/NetflixProject/VideoClub/Ribeiro/public/MovieRow.css'
// import FeaturedMovie from '/Users/Hp/Desktop/EKP01/UFCD 0158 - Java Script/Exercicios/NetflixProject/VideoClub/Ribeiro/public/FeaturedMovie'
// import Header from '/Users/Hp/Desktop/EKP01/UFCD 0158 - Java Script/Exercicios/NetflixProject/VideoClub/Ribeiro/public/Header'
//------------------------------------------------------------------
const express = require("express")
const router = express.Router()
const db = require('./db')
const fetch = require ('node-fetch')

router.get('/Api', )
//router.get('/competitions', getCompetitions)

//##########################################################################
// API
// export default () => {

//     const [movieList, setMovieList] = useState([])
//     const [featuredData , setFeaturedData] = useState(null)
//     const [blackHeader , setBlackHeader] = useState(false)   /* começa a falso, e quando o scroll anda 12 em Y, passa a verdadeiro, preenchendo o background */
  
//     useEffect(()=> {
//       const loadAll = async () => {
//         // Para buscar a lista de filmes TOTAL
//         let list = await Tmdb.getHomeList()
//         setMovieList(list)
  
//         // Buscar o Featured / filme em destaque
//         let originals = list.filter(i=>i.slug ==='originals')
//         let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length -1 ))
//         let chosen = originals[0].items.results[randomChosen]
//         let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv')
//         setFeaturedData(chosenInfo)
        
//       }
  
//       loadAll()
//     }, [])
  
  
//     useEffect (()=> {               
//       const scrollListener = () => {    /* começa a falso, e quando o scroll anda 12 em Y, passa a verdadeiro, preenchendo o background */
//           if(window.scrollY >12){
//             setBlackHeader (true)
           
//           }else setBlackHeader (false)
//       }
//       window.addEventListener('scroll',scrollListener);
//       return () => {
//         window.removeEventListener('scroll',scrollListener)
//       }
      
//     }, [])
    
  
  
//     return(
//       <div className="page">
  
//         <Header black={blackHeader} />
  
  
//         {featuredData && 
//           <FeaturedMovie item={featuredData}/> // não é loop nao precisa de key
//           }
  
  
//         <section className="lists">
//           {movieList.map((item, key)=> (
//            <MovieRow key={key} title={item.title} items={item.items} />
//           ))}
//         </section>
//         <footer><center>
//           Trabalho concluído por:<br />
//           1SAR ETA Ferreira Pereira<br />
//           1SAR ETA Nogueira Pratas<br />
//           1SAR ETA Faria Ribeiro</center>
//         </footer>
//       </div>
//     )
//   }


// function getCompetitions(req, res) {
//     db.getCompetitions().then(competitions => res.json(competitions))
// }

module.exports = router
