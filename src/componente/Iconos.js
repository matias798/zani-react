import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';


import { BiBed } from "react-icons/bi";
import { FaToilet } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";



const iconos = ({dormitorios,habitaciones,baños}) => {

  return (


    



<div className='d-flex m-5'>
  
<div className='d-flex  justify-content-center'>
<BiBed className=' PropiedadesIcons m-3' />
<span className=' m-3'>{dormitorios} </span>
</div>

<div className='d-flex justify-content-center'>
<FaToilet className='PropiedadesIcons p m-3' />
<span className='m-3'>{habitaciones} </span>
</div>

<div className='d-flex justify-content-center'>
<RiHome2Line className='PropiedadesIcons m-3' />
<span className=' m-3'> {baños}</span>
</div>

</div>


    );
}

export default iconos;
