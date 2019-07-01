import React from 'react';
import './header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <Container>
                    <Navbar expand="lg" variant="light" >
                    <Navbar.Brand href="#" className="navbarbrand">Navbar</Navbar.Brand>
                    </Navbar>
                </Container>
            </div>
        );
    }
}