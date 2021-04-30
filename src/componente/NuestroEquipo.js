import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import './../styles/NuestroEquipo.css';


import agente1 from './../imagenes/agent1.jpg';
import agente2 from './../imagenes/agent2.jpg';
import agente3 from './../imagenes/agent3.jpg';



const NuestroEquipo = () => {


  return (
      
<div className='mt-5 pt-5'>
  
<div className="container ">
    <div className="row d-flex fw justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        {/* <!-- Section Heading--> */}
        <div className="section_heading text-center  fadeInUp" data--delay="0.2s" >
          <h2 className="mb-5 text-center">Nuestro equipo</h2>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <div className="row d-flex fw d-flex justify-content-around">
     
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="perfilAgente  fadeInUp" data--delay="0.3s" >
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb">
            
        <img src={agente1} className='w-100 rounded' alt=""/>
            {/* <!-- Social Info--> */}
            <div className="social-info">
          <a href="https://es-la.facebook.com/pages/category/Real-Estate-Agent/Estudio-ZANI-Inmobiliaria-457171584356389/">
            <i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3>Marcelo Zanni</h3>
            <p className="designation pb-4">Matricula 628</p>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="perfilAgente  fadeInUp" data--delay="0.4s">
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb">
        <img src={agente2} className='w-100 rounded' alt=""/>
            {/* <!-- Social Info--> */}
            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
              <i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3>Marcela Quiroga</h3>
            <p className="designation pb-5">Marketing</p>
          </div>
        </div>
      </div>
      {/* <!-- Single Advisor--> */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="perfilAgente  fadeInUp" data--delay="0.5s" >
          {/* <!-- Team Thumb--> */}
          <div className="advisor_thumb">
        <img src={agente3} className='w-100 rounded' alt=""/>
            {/* <!-- Social Info--> */}
            <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#">
              <i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
          </div>
          {/* <!-- Team Details--> */}
          <div className="single_advisor_details_info">
            <h3>Graciela </h3>
            <p className="designation">Administrativa en Inmobiliaria</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


    
    );
}

export default NuestroEquipo;
