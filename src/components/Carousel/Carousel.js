import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import PlateLeftovers from '../../assets/images/plate-leftovers.jpg'
import CityWaste from '../../assets/images/city-waste.jpg'
import Dumpsite from '../../assets/images/dumpsite.jpg';


class PhotoCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay interval="3000" transitionTime="2000" showArrows={true} showThumbs={false} >
                <div>
                    <img src={Dumpsite} alt='dumpsite' />
                    <p className="facts">Food loss and waste accounts for about 4.4 gigatons of greenhouse gas
                    emissions annually. If food loss was a country, it would the the third-largest greenhouse
                    gas emitter, behind China and the US.</p>
                </div>
                <div>
                    <img src={CityWaste} alt='city food waste piles' />
                    <p className="facts">At the retail level, large quantities of food are wasted because of an 
                    emphasis on appearance- in fact, half of all produce is thrown away in the US because it is 
                    deemed too “ugly” to eat; this amounts to 60 million tons of fruits and vegetables. </p>
                </div>
                <div>
                    <img src={PlateLeftovers} alt='plate leftovers' />
                    <p className="facts">Food waste ends up wasting a quarter of our water supply in the form of 
                    uneaten food. The water used to produce the food wasted could be used by 9 BILLION people at 
                    about 200 liters per person per day.</p>
                </div>
            </Carousel>
        );
    }
};

export default PhotoCarousel;


