import React from 'react';
import './style.scss'
import { Card, Avatar, Row, Col  } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CardAuthor = () => {

    return ( 
        <div onClick={() => alert("Noticia Seleccionada")}>
        <Card className="card_author">
            <div className="card_author_body">
            <h1 className="title_h1" data-testid="titulo" ><span className="marked" >Lead. </span>Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
            <Row justify="space-around" align="middle">
                <Col  md={12} lg={24} xl={24}>
                    <Avatar className="card_author_avatar" size={64} icon={<UserOutlined />} />
                </Col>
                <Col  md={12} lg={24} xl={24}>
                 <p className="author" data-testid="author" >Marquee / Author</p>
                </Col>
            </Row>
            </div>
        </Card>
        </div>
     );
}
 
export default CardAuthor;