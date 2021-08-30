import React from 'react';
import './style.scss'
import {  Row, Col  } from 'antd';
import CardInverted from '../cards/CardInverted';
import CardRegular from '../cards/CardRegular';

const Principal = () => {
    return ( 
        <Row className="container_row">
            <Col  sm={24} md={14}  xl={14}>
                <CardInverted/>
            </Col>
            <Col sm={0} md={1}  xl={1}>
            <hr className="solid_v"/>
            </Col>
            <Col sm={24} md={9}  xl={9} >
                <Row >
                    <Col  >
                        <CardRegular/>
                    </Col>
                    <Col  >
                        <CardRegular/>
                    </Col>
                </Row>
            </Col>
        </Row>
     );
}
 
export default Principal;