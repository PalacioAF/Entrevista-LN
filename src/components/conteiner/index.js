import React from 'react';
import './style.scss'
import { Layout, Row, Col  } from 'antd';
import BannerHeader from '../banner/BannerHeader'
import BannerLateral from '../banner/BannerLateral'
import Principal from './Principal';
import Second from './Second';
import RightFocal from './RightFocal'
import Nota from './Nota'
import Opinion from './Opinion'
import NotaColor from './NotaColor'
import TopNotice from './TopNotice';
import Cinema from './Cinema';
import FullScreem from './FullScreem';

const Container = () => {

    const {  Content } = Layout;

    return ( 
        <div>
            <Layout className="layout" style={{ minHeight: "100vh" }}>
                <FullScreem/>
                <Content className="content" style={{ padding: "0 150px", marginTop: "10px", marginBottom: "20px" }}>
                    <div className="site-layout-content">
                        <Row span={18}>
                            <Col sm={24} md={24}  xl={18} className="container_main">

                            <BannerHeader/>

                            <Principal/>

                            <hr className="solid"/>

                            <Second/>

                            <RightFocal/>

                            <Nota/>

                            <Opinion/>

                            <NotaColor/>

                            </Col>

                            <Col sm={0} md={0}  xl={6} className="container_larteral">
                                
                                <BannerLateral/>

                            </Col>
                        </Row>

                        <TopNotice/>

                        <Cinema/>

                    </div>
                </Content>
            </Layout>
        </div>
     );
}
 
export default Container;