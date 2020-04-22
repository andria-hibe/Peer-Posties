import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormFields from './FormFields'

export default function MainSections() {
  return (
    <div>
        <div className="background-image">
            <Container className='justify-content-md-center'>
          <Row className='pt-5'>
            <Col className= 'center-col' sm={12} lg={6}>
              <h1 className='hero'>Your local on-demand courier </h1>
              <h2 className='hero-2'>We help business deliver their goods AND people pick up their products. </h2>
            </Col>
            <Col className= 'center-col' pb-5 sm={12}lg={6}>
                <FormFields />
                
            </Col>
          </Row>
          </Container>
        </div>
        <Row className='blue-line'></Row>
        
    </div>
  );
}
