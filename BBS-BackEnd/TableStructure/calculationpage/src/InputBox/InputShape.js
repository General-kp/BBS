import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Image, Container } from 'react-bootstrap';
import './InputShape.css'
//Images
import XDirectionImage from '../images/X-direction.png';
import YDirectionImage from '../images/t1.png';
import TableImgX from '../images/TableImgX.png'
import TableImgY from '../images/TableImgY.png'


function InputShape() {
    const [selectedDirection, setSelectedDirection] = useState(null);
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [footingId, setFootingId] = useState('');
    const [diameter, setDiameter] = useState('');
    const [spacing, setSpacing] = useState('');
    const [clearCover, setClearCover] = useState('');
    const [numberOfItems, setNumberOfItems] = useState('');
    const [sizeX, setSizeX] = useState('');
    const [sizeY, setSizeY] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    //table data
    const initialRows = [
        ['1', 'X-Direction', <img src={TableImgX} alt="Shape 1" />, 'F1', 'BM1', '12', '5', '150', '750', '0.785', '3.925'],
        ['1', 'Y-Direction', <img src={TableImgY} alt="Shape 1" />, 'F2', 'BM2', '16', '8', '200', '1600', '1.58', '12.64'],
    ];

    const [rows, setRows] = useState(initialRows);
    const [nextSlNo, setNextSlNo] = useState(2);

    const addRows = () => {
        const newRows = [
            [`${nextSlNo}`, `X- Direction`, <img src={TableImgX} alt="Shape 1" />, `BM${nextSlNo}`, '12', '5', '150', '750', '0.785', '3.925'],
            [`${nextSlNo}`, `Y-Direction`,<img src={TableImgY} alt="Shape 1" />, `F${nextSlNo + 1}`, `BM${nextSlNo + 1}`, '16', '8', '200', '1600', '1.58', '12.64'],
        ];
        setRows([...rows, ...newRows]);
        setNextSlNo(nextSlNo + 2);
    };

    const handleDirectionChange = (event) => {
        setSelectedDirection(event.target.value);
    };
    // Not yet defined
    const handleFootingChange = (event) => {

    }
    const handleSizeXChange = (event) => {
        setSizeX(event.target.value);
    };

    const handleSizeYChange = (event) => {
        setSizeY(event.target.value);
    };

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch('http://127.0.0.1:8000/footing/add')
            .then(response => response.json())
            .then(data => {
                // Update state with data from the API
                setNumber1(data.a);
                setNumber2(data.b);
                setNumber3(data.c);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getImageForDirection = () => {
        if (selectedDirection === 'X Direction') {
            return XDirectionImage;
        } else if (selectedDirection === 'Y Direction') {
            return YDirectionImage;
        } else {
            return null;
        }
    };

    

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 40px' }}>

                {/* INPUT SHAPE */}
                <Card style={{ width: '26rem' }}>
                    <Card.Body>
                        <Card.Title className='Input-title'>Input Shape</Card.Title>
                        <Form>
                            {/* Dropdown */}
                            <Form.Group controlId="exampleForm.ControlSelect1" id='form-options'>
                                <Form.Control as="select" onChange={handleDirectionChange}>
                                    <option>Select Direction</option>
                                    <option>X Direction</option>
                                    <option>Y Direction</option>
                                </Form.Control>

                                {selectedDirection && selectedDirection !== 'Select Direction' && (
                                    <>
                                        <Image
                                            src={getImageForDirection()}
                                            alt={`Image for ${selectedDirection}`}
                                            rounded
                                            style={{ width: '100%', maxHeight: '135px', objectFit: 'cover' }}
                                        />
                                        <div style={{ marginBottom: '10px', marginTop: '8px' }} className='Input-title'>
                                            <strong>{selectedDirection}</strong>
                                        </div>
                                    </>
                                )}
                            </Form.Group>


                            <Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label id='form-options'>A</Form.Label>
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
                                        <Form.Label id='form-options'>B</Form.Label>
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
                                        <Form.Label id='form-options'>C</Form.Label>
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
                                        <Form.Label id='form-options'>Total Length</Form.Label>
                                        <Form.Control type="number" placeholder="" readOnly value={number4} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            {/* Checkbox */}
                            <Form.Group controlId="formBasicCheckbox" id='form-options'>
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

                {/* INPUT FOOTING */}

                <Card style={{ width: '26rem' }}>
                    <Card.Body>
                        <Card.Title className='Input-title'>Input Footing</Card.Title>
                        <Form>
                            {/* Dropdown for Types of Footing */}
                            <Form.Group controlId="footingType">
                                {/* <Form.Label>Types of Footing</Form.Label> */}
                                <Form.Control as="select" onChange={handleFootingChange} id='form-options'>
                                    <option>Type Of Footing</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </Form.Control>
                            </Form.Group>

                            {/* Input for Footing ID */}
                            <Form.Group controlId="footingId" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label >Footing ID</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Footing ID"
                                            value={footingId}
                                            onChange={(e) => setFootingId(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>


                            {/* Dropdown for Diameter */}
                            <Form.Group controlId="diameter" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label>Diameter</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            value={diameter}
                                            onChange={(e) => setDiameter(e.target.value)}
                                        >
                                            {[...Array(15).keys()].map((num) => (
                                                <option key={num + 8} value={num + 8}>
                                                    {num + 8}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Input for Spacing */}
                            <Form.Group controlId="spacing" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label>Spacing</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter Spacing"
                                            value={spacing}
                                            onChange={(e) => setSpacing(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Input for Clear Cover */}
                            <Form.Group controlId="clearCover" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label>Clear Cover</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter Clear Cover"
                                            value={clearCover}
                                            onChange={(e) => setClearCover(e.target.value)}
                                        /></Col>
                                </Row>
                            </Form.Group>

                            {/* Input for Number of Items */}
                            <Form.Group controlId="numberOfItems" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label>Number of Items</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter No. of Items"
                                            value={numberOfItems}
                                            onChange={(e) => setNumberOfItems(e.target.value)}
                                        /></Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="size" id='form-options'>
                                <Row>
                                    <Col>
                                        <Form.Label>Size</Form.Label>
                                    </Col>

                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder={`Enter Size ${selectedDirection}`}
                                            value={sizeX}
                                            onChange={handleSizeXChange}
                                            disabled={selectedDirection !== 'X Direction'}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            placeholder={`Enter Size ${selectedDirection}`}
                                            value={sizeY}
                                            onChange={handleSizeYChange}
                                            disabled={selectedDirection !== 'Y Direction'}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>


                {/* IMAGE UPLOAD CARD */}
                <Card style={{ width: '26rem', marginLeft: '20px', marginRight: '40px' }}>
                    <Card.Body>
                        {/* <Card.Title className='Input-title'>Footing Image</Card.Title> */}
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Selected"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}

                        {/* Upload Image Button (conditionally rendered) */}
                        {!selectedImage && (
                            <Button variant="primary">
                                <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                                    Upload Image
                                </label>
                                <input
                                    id="imageUpload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </div>
            <br /><br />

            <Container className='button-container'>
                <Button variant="secondary" style={{ margin: '0 5px' }}>
                    Calculate
                </Button>
                <Button variant="secondary" style={{ margin: '0 5px' }}>
                    Reset
                </Button>
                <Button variant="secondary" style={{ margin: '0 5px' }}>
                    Print
                </Button>
                <Button variant="secondary" style={{ margin: '0 5px' }}>
                    Edit
                </Button>
                <Button variant="secondary" style={{ margin: '0 5px' }}>
                    Download
                </Button>
                <Button variant="secondary" style={{ margin: '0 5px' }} onClick={addRows}>
                    Add
                </Button>
            </Container>
<br /><br />
            {/* table */}
            <table className="table">
                <thead>
                    <tr className='table-heading'>
                        {['Sl No', 'Location', 'Shape', 'Footing ID', 'Bar Mark', 'Dia of Bar (mm)', 'No. of Bars', 'Cutting Length', 'Total Length', 'Unit Weight', 'Total Weight'].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default InputShape;
