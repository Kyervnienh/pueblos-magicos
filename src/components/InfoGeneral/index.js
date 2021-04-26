import React from 'react';
import Table from 'react-bootstrap/Table';
import './index.scss';

const InfoGeneral = (
    {
        name = 'Valle de Bravo',
        img = 'https://media.architecturaldigest.com/photos/5bd0e1fc54bd2b5be7ac78cb/16:9/w_2560%2Cc_limit/GettyImages-162318248.jpg',
        infoState = 'A tan sólo 145 km. de la Ciudad de México se encuentra Valle de Bravo, uno de los lugares favoritos de los habitantes de la capital y Toluca; centro de relajación y de descanso de turistas de todo el mundo. Su nombre se debe al general Nicolás Bravo, quien fue el hombre de confianza de José María Morelos y presidente interino o sucesor en México en tres ocasiones. El clima que acompaña a Valle de Bravo es excelente casi todo el año, el sol calienta sus calles y se acompaña de una brisa fresca al estar cerca del lago y es ideal para disfrutar de un paseo en lancha o una caminata por sus calles, llenas de tiendas artesanales y restaurantes con cocina tradicional e internacional.'
    }) => {
    return (
        <div className="ContainerInfoGeneral">
            <Table responsive>
                <thead>
                    <tr>
                        <th><h1 className="titleGeneral">Información general</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="infoSection">
                        <td>
                            <img className="imgStyle" src={img} alt={name}></img>
                        </td>
                        <td>
                            <p className="textDescription">{infoState}</p>
                        </td>
                    </tr>
                    <tr>
                        <td><h1 className="title">¿Qué hacer en {name} ?</h1></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default InfoGeneral;
