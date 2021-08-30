import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardBody from '../cards/CardBody';
import CardRegular from '../cards/CardRegular';
import CardAuthor from '../cards/CardAuthor';

const RightFocal = () => {
    return ( 
        <div>
            <Divider orientation="left">Notas</Divider>
            <Row className="container_row">
                <Col sm={24} md={8}  xl={8}>
                    <CardRegular/>
                </Col>
                <Col sm={24} md={8}  xl={8}>
                    <CardBody/>
                </Col>
                <Col sm={24} md={8}  xl={8}>
                    <CardAuthor/>
                </Col>
                <Col sm={24} md={8}  xl={8}>
                    <CardRegular/>
                </Col>
                <Col sm={24} md={8}  xl={8}>
                    <CardRegular/>
                </Col>
                <Col sm={24} md={8}  xl={8}>
                    <CardRegular/>
                </Col>
            </Row>
        </div>
     );
}
 
export default RightFocal;