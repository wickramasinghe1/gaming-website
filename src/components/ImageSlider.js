import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { IMAGES } from '../assests';
import './ImageSlider.css'

export default function ImageSlider() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 image-slider"
                    src={IMAGES.A1IMG}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-slider"
                    src={IMAGES.A2IMG}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-slider"
                    src={IMAGES.A3IMG}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
