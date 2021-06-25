import React from 'react';
import NavSidebar from '../../components/NavSidebar';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer';
import background from '../../assets/aboutUs.png';

const AboutUsPage = () => {
  const img = [String(background)];
  let titleP1 = 'CONOCE NUESTRO';
  let titleP2 = 'EQUIPO';
  let subtitle = '';

  return (
    <>
      <NavSidebar
        bgImage={img}
        titleP1={titleP1}
        titleP2={titleP2}
        subtitle={subtitle}
      />
      <h1 className="title">
        ¿Quiénes dan mantenimiento y soporte a Pueblos Mágicos?
      </h1>
      <div className="SupportTable">
        <Table responsive className="justify-content-start">
          <tbody className="mx-auto">
            <tr>
              <th>Kevin Henry López Vázquez</th>
              <th>Paulina Valeria Quintero Mucito</th>
              <th>Jesrig Soid Pineda Salinas</th>
              <th>Laura Raquel Vazquez Sanchez</th>
            </tr>
            <tr>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png"
                  rounded
                />
              </td>
              <td>
                <Image
                  width="40px"
                  height="40px"
                  src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png"
                  rounded
                />
              </td>
            </tr>
            <tr>
              <td>kevin.kyervnienh@gmail.com</td>
              <td>paulina.mucito@gmail.com</td>
              <td>Js.pineda.sa@gmail.com</td>
              <td>raquelskrats@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
