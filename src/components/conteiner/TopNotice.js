import React from 'react';
import './style.scss'
import {  Row, Col, Divider  } from 'antd';
import CardTop from '../cards/CardTop';

const TopNotice = () => {
    return ( 
        <div>
                             <Divider orientation="left">Las más leídas</Divider>

                            <Row className="container_row">
                            <Col sm={24} md={6}  xl={6}>
                                <CardTop/>
                            </Col>
                            <Col sm={24} md={6}  xl={6}>
                                <CardTop/>
                            </Col>
                            <Col sm={24} md={6}  xl={6}>
                                <CardTop/>
                            </Col>
                            <Col sm={24} md={6}  xl={6}>
                                <CardTop/>
                            </Col>
                            </Row>
        </div>
     );
}
 
export default TopNotice;