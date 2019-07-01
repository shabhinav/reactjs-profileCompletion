import React from 'react';
import './profilesetup.scss';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


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
                
            </div>
            </div>
        );
    }
} 