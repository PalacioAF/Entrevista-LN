import React from 'react';
import './style.scss'
import {  Row, Col  } from 'antd';
import CardFullScreem from '../cards/CardFullScreem';

const FullScreem = () => {
    return ( 
        <div>
            <Row >
                <Col span={24}>
                <CardFullScreem/>
                </Col>
            </Row>
        </div>
     );
}
 
export default FullScreem;