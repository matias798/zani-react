import React from 'react';
import Slider from 'infinite-react-carousel'
import './../styles/Carousel.css';
import {Link} from 'react-router-dom'


const Carrousel = ({images}) => {

 

  return (
    <section className='slider'>
    <Slider className='slider__content'>
      {images.map((image) => (
        <div key={image.id} className='slider__content--item'>

<Link to ={`/detalle/${image.id}`}>

          <img className='carouselImage' src={image.image} alt={image.title} />
        
          <p id='text' className='slider-description aligin-self-center'>{image.title}</p>

</Link>
        </div>
      ))}
    </Slider>
  </section>
 
    )
}

export default Carrousel;