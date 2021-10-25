import React from 'react';
import { Link } from "react-router-dom";
import Box3 from '../img/box.png';
import Clock3 from '../img/clock .png';
import Comment3 from '../img/comment .png';
import Delete3 from '../img/delete.png';

const Navegacion = () => {
    return (
        <div className="container mt-5 padre">
            <Link to="/Box" className="links"> 

                    <figure>
                    <img src={Box3} alt="" className="tamaño-img" />
                    <figcaption> Box</figcaption>
                    
                    </figure>  
            </Link> 

             <Link to="/Clock" className="links"> 

                <figure>
                <img src={Clock3} alt="" className="tamaño-img" />
                <figcaption> Clock </figcaption>
                
                </figure>  
            </Link> 


            <Link to= "/Comment" className="links"> 

                <figure>
                <img src={Comment3} alt="" className="tamaño-img" />
                <figcaption> Comment</figcaption>
                
                </figure>  
            </Link> 


            <Link to= "/Delete" className="links"> 

                <figure>
                <img src={Delete3} alt="" className="tamaño-img" />
                <figcaption> Delete</figcaption>
                
                </figure>  
            </Link> 

        </div>
    )
}

export default Navegacion
