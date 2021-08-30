import React from 'react';
import './style.scss'
import image from '../../asset/image/back.png';

import { Card, Tag  } from 'antd';


const CardNota = () => {

    return ( 
        <div className="card_nota" onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
            <div className="card_nota_container">
                <img src={image} className="card_nota_image" alt=""/>
                <Tag color="black" className="card_nota_tag">ESPACIO PATROCINADO</Tag>
            </div>    
            <div className="card_note_txt">
                <h3 className="title_h3 white" data-testid="titulo">Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h3>
                <p className="author white" data-testid="author">Marquee / Author</p>
            </div>
            </Card>
        </div>
     );
}
 
export default CardNota;