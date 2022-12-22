import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'semantic-ui-react';
import Carousel1 from '../images/carousel_1.jpg';
import Carousel2 from '../images/carousel_2.jpg';
import Carousel3 from '../images/carousel_3.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <>
            <Container style={{ paddingTop: '20px' }}>
                <Carousel variant='dark'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel1}
                            alt="First slide"
                            height={400}
                            width={500}
                        />
                        <Carousel.Caption>
                            <h3>Looking to land your dream job?</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel2}
                            alt="Second slide"
                            height={400}
                            width={500}
                        />

                        <Carousel.Caption>
                            <h3>1,00,00,000+ Opportunities</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Carousel3}
                            alt="Third slide"
                            height={400}
                            width={500}
                        />
                        <Carousel.Caption>
                            <h3>Easy Application Process</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='homeButtonContainer'>
                    <Link to="/jobs">
                        <Button className='homeButtons'>Jobs</Button>
                    </Link>
                    <Link to="/contact">
                        <Button className='homeButtons'>Contact Us</Button>
                    </Link>
                    <Button className='homeButtons'>Coming Soon</Button>
                </div>
            </Container>
        </>
    );
}

export default Home;