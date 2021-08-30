import React from 'react';
import './style.scss'
import { Card ,Tag } from 'antd';
import image from '../../asset/image/back.png';

const CardCinema = () => {

    return ( 
        <div className="card_cinema" onClick={() => alert("Noticia Seleccionada")}>
            <Card bordered={false} >
                <div className="card_cinema_container">
                    <img src={image} className="card_cinema_image" data-testid="image" alt=""/>
                    <div className="card_cinema_title">
                        <Tag color="black" className="card_cinema_tag">INFOGRAFÍA</Tag>
                        <div  className="card_cinema_body">
                            <h1 className="title_h1" data-testid="titulo"><span className="marked" >Lead. </span> Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
                            <p className="author" data-testid="author" >Marquee / Author</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
     );
}
 
export default CardCinema;