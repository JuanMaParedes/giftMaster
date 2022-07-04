import React,{ useEffect, useState } from "react";
import banner from "../assets/banner1.gif";
import NavbarApp from "../components/NavbarApp";
import {getGifTrending} from '../helpers/fetchApi';

const HomeScreen = () => {
  //Para renderizar react si el estado del componente cambia, react se renderiza
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Cuando se carga o se renderiza la pagina
  useEffect(()=>{
    getGifTrending().then((respuesta)=>{
      console.log(respuesta);
      let arreglo=[];
      respuesta.forEach(element => {
        const {title, id}= element;
        const {url}= element.images.original;
        arreglo.push({id, title, url});
        
      });
      setGifts([...arreglo]);
      setLoading(false);
    });
  },[]);

  return (
    // fragment
    <>
    
    <div className="container"> 
      <div className="row">
        <div className="col">
          <div className="w-100">
            <img className="img_banner" src={banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col">
          <h3 className="text-white">
            <i className="fa fa-line-chart" aria-hidden="true"></i> Trending
          </h3>
        </div>
      </div>
      {loading ?(
        <div className="col-6 offset-3">
          <h3 className="text-white text-center">Cargando...</h3>
        </div>
      )
        :(
      <div className="galeria">
        {gifts.map((gif, index)=>(
          <div className= "mb-3 animate__animated animate__fadeIn" key={index}> 
            <img className="img_galeria" src={gif.url} alt={gif.title} />
            
          </div>
        ))}
      </div>

        )
      }
    </div>
    </>   
  );
  
};

export default HomeScreen;
