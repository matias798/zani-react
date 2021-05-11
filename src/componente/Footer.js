import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Footer.css';
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { TiSocialPinterest } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";


function Footer() {

  return (
    <section className='FooterColor'>
   
<div className="d-flex justify-content-around FooterWraper ">

   <div>
    <h2 className="text-white text-center">Terminos y condiciones</h2>
    <div className="text-center"><a  href="/">Copyright Notice</a> </div>

<div className="text-center"><a  href="/sobre-nosotros">Sobre nosotros</a> </div>
</div>


<div>
<h2 className="text-white  text-center  m-2 mb-4">Redes sociales</h2>


    <a href="https://www.facebook.com/inmobiliariamarcelozanni" className="FooterIcons">
    <FiFacebook className="FooterIcons" />
    </a>

    <a href="https://www.instagram.com/inmobiliariamarcelozanni/"className="FooterIcons" >
    <FiInstagram className="FooterIcons" />
    </a>

    <a href="https://ar.pinterest.com/inmobiliariamarcelozanni/" className="FooterIcons" >
 <TiSocialPinterest className="FooterIcons" />
    </a>
    
    <a href="https://www.youtube.com/channel/UCbRermRAC4U0pAMeFV1xrww?reload=9&view_as=subscriber" className="FooterIcons">
 <AiOutlineYoutube className="FooterIcons" />
    </a>
    

    <a href="https://www.linkedin.com/in/inmobiliariamarcelozannirosario/" className="FooterIcons">
 <FiLinkedin className="FooterIcons" />
    </a>
</div>

</div>


    </section>
    
  );
}

export

default Footer;
