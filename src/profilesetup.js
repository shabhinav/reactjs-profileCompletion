import React from 'react';
import './profilesetup.scss';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export default class Profilesetup extends React.Component{
    render(){
        return(
            <div className="profilesetup">
                <div class="container">
                    <div className="Form conatiner">
                        <div className="row">
                            <div className="offset-1 col-lg-9 formdesign">

                            <Form>
                                <div className="row">
                                <div className="offset-3 col-lg-6 dropsel_design">
                            <Dropdown>
                            < Dropdown.Toggle variant="success" id="dropdown-basic">
                                college and Education
                            </Dropdown.Toggle>

                            <Dropdown.Menu>           
                                <Dropdown.Item href="#/action-1">D.A.V</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">I.P.U</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">D.P.S</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            </div>
                                </div>
                            
        
                            <h1>Work</h1>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Company 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Enter Company name" />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Organistaion 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Enter Organistion name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Position 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Position" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              city/town 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="City/Town" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Description 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Description" />
                            </Col>
                        </Form.Group>

                        <div className="row">
                            <div className="offset-3 col-lg-6 dropsel_design">
                                <select>
                                    <option value="A">Andhra Pradesh</option>
                                    <option value="B">Arunachal Pradesh</option>
                                    <option value="C">Assam</option>
                                    <option value="A">Bihar</option>
                                    <option value="">Chandigarh</option>
                                    <option value="B">Chattisgarh</option>
                                    <option value="">Delhi</option>
                                    <option value="C">Goa</option>
                                    <option value="A">Gujrat</option>
                                    <option value="B">Harayna</option>
                                    <option value="C">Himachal Pradesh</option>
                                    <option value="A">Jammu and Kashmir</option>
                                    <option value="B">Jharkhand</option>
                                    <option value="C">karnataka</option>
                                    <option value="A">Kerala</option>
                                    <option value="B">Madhya Pradesh</option>
                                    <option value="C">Maharashtra</option>
                                    <option value="A">Manipur</option>
                                    <option value="B">Meghalaya</option>
                                    <option value="C">Mizoram</option>
                                    <option value="A">Nagaland</option>
                                    <option value="B">Orisha</option>
                                    <option value="C">Punjab</option>
                                    <option value="A">Rajisthan</option>
                                    <option value="B">Sikkim</option>
                                    <option value="C">Tamil Nadu</option>
                                    <option value="A">Telangana</option>
                                    <option value="B">Tripura</option>
                                    <option value="C">Uttarpradesh</option>
                                    <option value="A">uttraKhand</option>
                                    <option value="B">West Bengal</option>
                                </select>
                            </div>
                        </div>

                            </Form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 