import React from 'react';
import './style.scss'
import image from '../../asset/image/back.png';

import { Tag } from 'antd';


const CardFullScreem = () => {

    return (
        <div className="card_full_screem_container" onClick={() => alert("Noticia Seleccionada")}>
            <img src={image} className="card_full_screem_image" data-testid="image" alt=""/>
            <div className="card_full_screem_title">
                <Tag color="black">INFOGRAFÍA</Tag>
                <h1 className="title_full_screem white"  data-testid="titulo">Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
                <p className="author white"  data-testid="author">Marquee / Author</p>
            </div>
        </div>
     );
}
 
export default CardFullScreem;