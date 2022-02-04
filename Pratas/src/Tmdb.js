const API_KEY = 'd5b8ca55f042e11a84ad50dd9d1ee7f4'
const API_BASE = 'https://api.themoviedb.org/3'

/*
- originais netflix
- recomendados (trending)
- top rated
- acção
- comedia
- terror
- romance
- documentarios
*/


const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}



export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'trending',
                title: 'Recomendados para si',
                items: await basicFetch(`/trending/all/week?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'toprated',
                title: 'Clássicos',
                items: await basicFetch(`/movie/top_rated?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'action',
                title: 'Acção',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-pt&api_key=${API_KEY}`) 
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-pt&api_key=${API_KEY}`) 
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}

        if (movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-pt&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-pt&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                    break;
            }
        }
        return info
    }


}