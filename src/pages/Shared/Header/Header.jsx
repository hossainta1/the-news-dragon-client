import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <h5>{moment().format("dddd, MMMM Do, YYYY")}</h5>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70}>
                    "Revolutionizing the Future: Breakthrough Discovery ....... Unveils Groundbreaking Technology Set to Transform Every Industry!......"
                </Marquee>
            </div>


        </Container>
    );
};

export default Header;