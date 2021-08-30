import React from 'react';
import './style.scss'
import {  Row, Col  } from 'antd';
import CardRegular from '../cards/CardRegular';

const Second = () => {
    return ( 
        <Row className="container_row">
            <Col sm={24} md={12}  xl={12}>
                <CardRegular/>
            </Col>
            <Col sm={24} md={12}  xl={12}>
                <CardRegular/>
            </Col>
        </Row>
     );
}
 
export default Second;