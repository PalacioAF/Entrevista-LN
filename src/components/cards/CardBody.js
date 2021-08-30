import React from 'react';
import './style.scss'
import { Card } from 'antd';

const CardBody = () => {

    return ( 
        <div className="card_body" onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
                <div className="card_body_body">
                    <h1 className="title_h1" data-testid="titulo" ><span className="marked" >Lead. </span>Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
                    <p className="text" data-testid="text">Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.</p>
                    <p className="author" data-testid="author" >Marquee / Author</p>
                </div>
            </Card>
        </div>
     );
}
 
export default CardBody;