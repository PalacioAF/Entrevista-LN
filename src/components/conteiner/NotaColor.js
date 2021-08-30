import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardNota from '../cards/CardNota';

const RightFocal = () => {
    return ( 
        <div>
            <Divider orientation="left">Notas</Divider>
            <Row className="container_row">
                <Col sm={24} md={8}  xl={8}>
                    <CardNota/>
                </Col>
                <Col  sm={24} md={8}  xl={8}>
                    <CardNota/>
                </Col>
                <Col  sm={24} md={8}  xl={8}>
                    <CardNota/>
                </Col>
            </Row>
        </div>
     );
}
 
export default RightFocal;