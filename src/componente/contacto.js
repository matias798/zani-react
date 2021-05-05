import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'




function Contacto() {


function sendAlert(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tu mensaje fue enviado con exito!!',
    showConfirmButton: false,
    timer: 1500
  })
}


  return (
    <div className="container p-4 mb-5 mt-2 ">
    <form method="POST" target="/new-entry" className="form-group">

    
        <div className="text-left p-5 " >
            <label htmlFor="title"><h2>Nombre (obligatorio)</h2></label>
            <input name="Nombre" type="text" className="form-control"  autoFocus required/>
          </div>


      <div className="text-left p-5" >
        <label htmlFor="Email"><h2>Correo electrónico (obligatorio)</h2></label>
        <input name="Email" type="email" className="form-control"  autoFocus required/>
      </div>


      <div className="text-left p-5" >
        <label htmlFor="Asunto"><h2>Asunto</h2></label>
        <input name="Asunto" type="text" className="form-control"  autoFocus />
      </div>



      <div className="text-left p-5" >
        <label htmlFor="Mensaje"><h2>Tu mensaje </h2></label>
        <textarea name="Mensaje"  className="form-control" rows="3" autoFocus></textarea>
        </div>

<div className='d-flex justify-content-end'>
<button className='btn btn-primary m-5'onClick={()=>sendAlert()} >Enviar</button>
</div>
    
    
    </form>

  </div>
  );
}

export

default Contacto;
