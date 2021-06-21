import React from 'react';
import Slider from 'infinite-react-carousel'
import './../styles/Carousel.css';
import {Link} from 'react-router-dom'


const Carrousel = ({images}) => {


  return (
    <section className='slider '>
    <Slider className='slider__content'>
      {images.map((image) => (

<div key={image.id} className='slider__content--item'>

<Link to ={`/detalle/${image.id}`}>

          <img className='carouselImage ' src={image.image} alt={image.title} />
        
        <div className="d-flex justify-content-center">
          {/* <p id='text' className={`slider-description ${image === undefined ? "d-none" :""  }`} >{image.title}</p>
        */}   </div>

</Link>
        </div>
      ))}
    </Slider>
  </section>
 
    )
}

export default Carrousel;