import React from 'react';
import './style.scss'
import '../typography/style.scss'
import image from '../../asset/image/back.png';

import { Card  } from 'antd';

const CardInverted = () => {

    return ( 
            <div className="card_inverted" onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
                <div className="card_inverted_body">
                    <h1 className="title_h1" data-testid="titulo">Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
                    <p className="text" data-testid="text">Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.</p>
                    <p className="author" data-testid="author" >Marquee / Author</p>
                </div>
                <img src={image} className="card_inverted_image" alt=""/>
            </Card>
            </div>
     );
}
 
export default CardInverted;