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
                    <div className="row">
                        <div className="offset-3 col-lg-6">
                            <h1>Login</h1>
                            <div class='socioicons'>
                                <ButtonToolbar>
                                    <Button variant="outline-danger" className="buttons"><i class="fab fa-google"></i>Continue with google</Button>
                                    <Button variant="outline-dark"  className="buttons"><i class="fab fa-github"></i>Continue with github</Button>
                                    <Button variant="outline-primary"  className="buttons"><i class="fab fa-linkedin"></i>Continue with linkdin</Button>
                                    <Button variant="outline-success" className="buttons"><i class="fas fa-envelope"></i>Continue with   Email</Button>
                                </ButtonToolbar>
                            </div>
                        </div>  
                    </div>
                    <div className="Form conatiner">
                        <div className="row">
                            <div className="offset-1 col-lg-9 formdesign">

                            <Form>
                                <div className="row">
                                <div className="col-lg-6 dropsel_design">
                            <Dropdown>
                            < Dropdown.Toggle variant="success" id="dropdown-basic">
                                college and Education
                            </Dropdown.Toggle>

                            <Dropdown.Menu>           
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            </div>
                            <div className="col-lg-6 dropsel_design">
                            <select>
                                <option value="A">Delhi</option>
                                <option value="B">Banana</option>
                                <option value="C">Cranberry</option>
                            </select>
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
                            </Form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 