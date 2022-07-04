import React, { useEffect , useState } from "react";
import InfoCategory from "../components/InfoCategory";
import {useParams} from "react-router-dom"
import {getGifSearch} from "../helpers/fetchApi"
import GifCards from "../components/GifCards";


const CategoryScreen = () => {
  const {id}= useParams();
  let datos={};
  const [cantidad, setCantidad]= useState(18);
  const [gifts, setGifts] = useState([]);
 
  useEffect(()=>{
    getGifSearch(id,cantidad).then((respuesta)=>{
      // console.log(respuesta);
      let arreglo=[];
      respuesta.forEach(element => {
        const {title, id}= element;
        const{url} = element.images.original;
        arreglo.push({title, id, url});
      });
      setGifts([...arreglo]);
      
    })
  },[id, cantidad]);

  switch (id) {
    case "entertainment":
      datos = {
        categoria: "Entertainment",
        imagen:
          "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
        texto: "Get the latest GIFs from movies, TV, music, celebrities.",
      };
      break;

    case "sports":
      datos = {
        categoria: "Sports",
        imagen:
          "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
        texto:
          "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We've got them all!",
      };
      break;
    case "reactions":
      datos = {
        categoria: "Reactions",
        imagen:
          "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
        texto: "Don't tell it to me, GIF it to me!",
      };
      break;
    
  }
  const showMore=(id)=>{
    if (cantidad < 50){
      setCantidad(cantidad +6);
    }  
  }

  return (
    <div className="container">
      <div className="row">
        {/* <h1 className="text-white">Category Screen</h1> */}
        <InfoCategory datos={datos}/>

        {/* Tarjetas de giofs  */}
        <GifCards categoria={id} gifs={gifts} showMore={showMore}/>
      </div>
    </div>
  );
};

export default CategoryScreen;
