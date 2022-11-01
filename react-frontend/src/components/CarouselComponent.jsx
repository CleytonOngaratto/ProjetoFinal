// import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Carousel } from 'react-bootstrap'
import avião from '../img/avião.jpg'
import wp2 from '../img/wp2.jpg'
import wp3 from '../img/wp3.jpg'



function CarouselComponent() {

    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={avião}
                    alt="First slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className="m-b-100 d-block w-100"
                    src={wp2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={wp3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default CarouselComponent