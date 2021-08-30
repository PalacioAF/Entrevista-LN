import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardCinema from '../cards/CardCinema';

const Cinema = () => {
    return ( 
        <div>
            <Divider dashed />
            <Row className="container_row">
                <Col span={24}>
                    <CardCinema/>
                </Col>
            </Row>
        </div>
     );
}
 
export default Cinema;