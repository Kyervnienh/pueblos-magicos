import React from 'react';
import './index.scss';

const IntroduccionRecomendaciones = () => {
  return (
    <div className="recomendaciones">
      <h1 className="title">Conoce todas nuestras recomendaciones</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://cdn.pixabay.com/photo/2020/12/17/04/09/guanajuato-5838206_960_720.jpg"
              className="img-fluid rounded "
              alt="Guanajuato"
            />
          </div>
          <div className="col">
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              non volutpat nulla. Sed auctor, nunc non consequat congue, dui
              nisi rhoncus augue, vitae pharetra elit mauris et odio. Sed
              scelerisque, leo et pellentesque facilisis, leo nisl pretium arcu,
              vel eleifend turpis enim a libero. Nullam ac magna congue, aliquam
              nisi eget, porttitor neque. Mauris dapibus, nisi eu sollicitudin
              varius, urna est luctus nisi, vel laoreet massa diam quis magna.
            </p>
            <div className="text-center">
              <button type="button" className="btn">
                Ir al listado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduccionRecomendaciones;
