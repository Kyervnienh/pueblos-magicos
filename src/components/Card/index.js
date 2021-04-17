import React from 'react';
import './index.scss';
import star from '../../assets/icons/star.svg';

const CardComponent = (
    {
        img = 'https://imparcialoaxaca.mx/wp-content/uploads/2018/07/mas-de-100-pueblos-magicos-opcion-para-visitar-estas-vacaciones.jpg', 
        pts = '4.5', 
        nombre = 'Villa del carbón', 
        estado = 'Estado de México', 
        action = function(){
            console.log('click')
        }
    }) => {
    return ( 
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <div>
                    <div className="puntuacion">
                        <img src={star}     className="icon"
                        alt={nombre}
                        />
                         <p className="calificacion">{pts}</p>
                    </div>
                    <p className="nombre">{nombre}</p>
                    <p className="estado">{estado}</p>
                </div>
                <div className="circule">
                    <button type="button" class="btn" onClick={() => action()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
     );
}
 
export default CardComponent;