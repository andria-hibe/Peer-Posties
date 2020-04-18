import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete';

export default function FormFields () {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  };
  return (
    <div>
      
        <Col className ='width' xs={12} >
        <div className="request-form form-border">
          <Row>
            <div className="form-title">I want to send a...</div>
          </Row>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label className='form-text' column="lg" lg={5}>
              Pick Up Style
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                required
                placeholder="Select..."
                size="lg"
                as="select"
              >
                <option>Person</option>
                <option>Vehicle</option>
              </Form.Control>
            </Col>
          </Form.Group> */}

            <Form.Group
              className="button-group"
              as={Row}
              controlId="exampleForm.ControlTextarea1"
            >
              <Col sm={6}>
                <Button variant="outline-primary">
                  <img
                    className="button-image"
                    src="-bike-.png"
                    alt="small package"
                  ></img>
                </Button>
              </Col>
              <Col sm={6}>
                <Button variant="outline-primary">
                  <img
                    className="button-image"
                    src="-car-.png"
                    alt="large package"
                  ></img>
                </Button>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="exampleForm.ControlTextarea2">
              <Col sm={12}>
                <Form.Control
                  className="form-text no-border"
                  required
                  size="lg"
                  as="textarea"
                  placeholder="From..."
                  rows="1"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlTextarea2">
              <Col sm={12}>
                <Form.Control
                  className="form-text no-border"
                  required
                  size="lg"
                  as="textarea"
                  placeholder="To..."
                  rows="1"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
              <Form.Label className="form-text" column="lg" lg={3}>
                When
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  required
                  size="lg"
                  as="select"
                  type="text"
                  placeholder="Select..."
                >
                  <option>ASAP</option>
                  <option>Today</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group className="button-group">
              <Button
                className="calculate-button"
                type="submit"
                feedback="Please complete all fields."
              >
                Calculate
              </Button>
            </Form.Group>
            <Form.Group className="button-group">
              <Button
                className="book-button"
                type="submit"
                feedback="Please complete all fields."
              >
                Book Now
              </Button>
            </Form.Group>
          </Form>
        </div>
        </Col>
      
    </div>
  )
}
