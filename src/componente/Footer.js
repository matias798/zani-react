import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

  return (
    <footer>
    <div className="d-flex justify-content-around ">
    <div>
        <h2 className="text-white">Terminos y condiciones</h2>
        <div> <a className="white_font links" href="/">Copyright Notice</a> </div>
    
    <div>  <a className="white_font links" href="/sobre-nosotros">Sobre nosotros</a> </div>
    </div>
    
    
    <div className=" ">
    
        
        <a href="/contacto"> <h2 className="text-white"> </h2> </a>
    
    <div>
        <a href="https://www.facebook.com/inmobiliariamarcelozanni" className="links">
        <i className="fab fa-facebook white_font mr-4"></i>
        </a>
    
        <a href="https://www.instagram.com/inmobiliariamarcelozanni/" className="links">
      <i className="fab fa-instagram white_font mr-4"></i>
        </a>
    
        <a href="https://ar.pinterest.com/inmobiliariamarcelozanni/" className="links">
     <i className="fab fa-pinterest white_font mr-4"></i>  
        </a>
        
        <a href="https://www.youtube.com/channel/UCbRermRAC4U0pAMeFV1xrww?reload=9&view_as=subscriber" className="links"><i className="fab fa-youtube white_font mr-4"></i> 
        </a>
        
    
        <a href="https://www.linkedin.com/in/inmobiliariamarcelozannirosario/" className="links"><i className="fab fa-linkedin white_font mr-4"></i> 
        </a>
    </div>
    </div>
    </div>
    </footer>
    
  );
}

export

default Footer;
