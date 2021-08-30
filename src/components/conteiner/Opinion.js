import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardRegular from '../cards/CardRegular';
import CardAuthor from '../cards/CardAuthor';

const RightFocal = () => {
    return ( 
        <div>
            <Divider orientation="left">Opinión</Divider>
            <Row className="container_row">
                <Col  sm={24} md={9}  xl={9}>
                    <CardRegular/>
                </Col>
                <Col  sm={24} md={6}  xl={6}>
                    <Row>
                        <CardAuthor/>
                    </Row>
                    <Row>
                        <CardAuthor/>
                    </Row>
                </Col>
                <Col  sm={24} md={9}  xl={9}>
                    <CardAuthor/>
                </Col>
            </Row>
        </div>
     );
}
 
export default RightFocal;