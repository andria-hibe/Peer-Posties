import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormFields from './FormFields'

export default function MainSections() {
  return (
    <div>
        <div className="background-image">
            <Container>
          <Row className='pt-5'>
            <Col sm={12} lg={6}>
              <h1 className='hero'>Your local on-demand courier </h1>
              <h2 className='hero-2'>We help business deliver their goods AND people pick up their products. </h2>
            </Col>
            <Col sm={12}lg={6}>
                {/* <FormFields /> */}
                
            </Col>
          </Row>
          </Container>
        </div>
        <Row className='blue-line'></Row>
        
    </div>
  );
}
