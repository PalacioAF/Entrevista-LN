import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardBody from '../cards/CardBody';
import CardRegular from '../cards/CardRegular';

const RightFocal = () => {
    return ( 
        <div>
            <Divider orientation="left">Focal derecho</Divider>
            <Row className="container_row">
                <Col sm={24} md={9}  xl={9}>
                    <CardBody/>
                </Col>
                <Col sm={0} md={1}  xl={1}>
                <hr className="solid_v"/>
                </Col>
                <Col sm={24} md={14}  xl={14}>
                        <CardRegular/>
                </Col>
            </Row>
        </div>
     );
}
 
export default RightFocal;