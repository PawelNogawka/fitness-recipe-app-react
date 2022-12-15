

const BASE_URL = 'https://edamam-recipe-search.p.rapidapi.com/search?q'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e0b20fa2amsh686db9b8fd3725ap180af5jsnc241c6dbd921',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};




 export const  fetchApi = async (url) =>{
      const data = await fetch(`${BASE_URL}=${url}`, options)
      const result = await data.json()

      return result
}

//fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));