/* 'https://api.giphy.com/v1/gifs/trending?api_key=94Q5x1RSsdgw2F4GIn098AJQS4bqAX5v' */
const api_key= '94Q5x1RSsdgw2F4GIn098AJQS4bqAX5v';
const limite=20;
// Funcion para obtener los gits trending
export const getGifTrending= async()=>{
    const resp= await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limite}`);
    const {data}= await resp.json();
    return data;
}
//funcion que me traiga un gif por su id

//Funcion que me devuelva la busqueda
export const getGifSearch=async (termino, cantidad)=>{
try {
    const resp= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${termino}&limit=${cantidad}`)
    const {data}= await resp.json();
    return data;
} catch (error) {
    console.log(error)
}
}