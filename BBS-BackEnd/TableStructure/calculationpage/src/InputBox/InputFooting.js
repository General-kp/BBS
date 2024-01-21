import React, { useState, useEffect } from 'react';
import { Card, Form, Row, Col, Image } from 'react-bootstrap';
import XDirectionImage from '../images/X-direction.png';
import './InputShape.css'

function InputFooting() {
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');

  const handleDirectionChange = (event) => {
    setSelectedDirection(event.target.value);
  };

  useEffect(() => {
    // Update Total Length whenever the numbers change
    const totalLength = Number(number1) + Number(number2) + Number(number3);
    setNumber4(totalLength);
  }, [number1, number2, number3]);

  const getImageForDirection = () => {
    if (selectedDirection === 'X Direction') {
      return XDirectionImage;
    } else if (selectedDirection === 'Y Direction') {
      return XDirectionImage;
    } else {
      return null;
    }
  };

  return (
    <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title>Input Shape</Card.Title>
        <Form>
          {/* Dropdown */}
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select an Option</Form.Label>
            <Form.Control as="select" onChange={handleDirectionChange}>
              <option>Select Direction</option>
              <option>X Direction</option>
              <option>Y Direction</option>
            </Form.Control>

            {selectedDirection && (
              <Image
                src={getImageForDirection()}
                alt={`Image for ${selectedDirection}`}
                rounded
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
              />
            )}
            {selectedDirection && (
              <div style={{ marginBottom: '10px' }}>
                <strong>{selectedDirection}</strong>
              </div>
            )}
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Number 1</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number 1"
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Number 2</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number 2"
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Number 3</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number 3"
                  value={number3}
                  onChange={(e) => setNumber3(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Total Length</Form.Label>
                <Form.Control type="number" placeholder="" readOnly value={number4} />
              </Form.Group>
            </Col>
          </Row>
<br />
          {/* Checkbox */}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default InputFooting;
