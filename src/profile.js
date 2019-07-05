import React from 'react';
import './profile.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


export default class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <div className="container">
                    <div className="profileheading">
                    <span className="fas fa-user-circle fa-13x userlogo"></span>
                    <span><h3 className="ml-3">Profile</h3></span>
                    <hr/>
                    </div>
                    <div className="row">
                        <div className="offset-3 col-lg-6">
                            <div className="profileimg">
                                <img src="https://via.placeholder.com/150 "></img>
                            </div>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column lg="3">
                            Email
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Name
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Enter your Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Phone No. 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="Enter your phone No." />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              D.O.B 
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="text" placeholder="DD/MM/YYYY" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Gender
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="Text" placeholder="Gender" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                              Password
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column lg="3">
                             Confirm Password
                            </Form.Label>
                            <Col lg="8">
                            <Form.Control type="password" placeholder=" Confirm Password" />
                            </Col>
                        </Form.Group>

                    </Form>
                    </div >
                    <div class="offset-8 profilebutton">
                    <ButtonToolbar>
                        <Button variant="primary" className="btn_styling">save and proceed</Button>
                    </ButtonToolbar>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}