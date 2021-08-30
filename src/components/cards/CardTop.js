import React from 'react';
import './style.scss'
import image from '../../asset/image/back.png';

import { Card, Tag  } from 'antd';


const CardTop = () => {

    return ( 
        <div onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
                <div className="card_top_container">
                    <img src={image} className="card_top_image" data-testid="image" alt=""/>
                    <Tag color="black" className="card_top_tag">1</Tag>
                </div>    
                <div className="card_top_txt">
                    <h3 data-testid="titulo"><span className="marked" >Lead. </span>Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h3>
                </div>
            </Card>
        </div>
     );
}
 
export default CardTop;