import React from 'react';
import './style.scss'
import { Card } from 'antd';
import image from '../../asset/image/back.png';

const CardRegular = () => {

    return ( 
        <div className="card_regular" onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
                <div className="card_regular_body">
                <img src={image} className="card_regular_image" alt=""/>
                <div >
                    <h3 className="title_h3" data-testid="titulo"><span className="marked" >Lead. </span>Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h3>
                    <p className="author" data-testid="author">Marquee / Author</p>
                </div>
                </div>
            </Card>
            </div>
     );
}
 
export default CardRegular;