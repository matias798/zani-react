import 'bootstrap/dist/css/bootstrap.min.css';


function Contacto() {
  return (
    <div className="container p-4 mb-5 mt-2 ">
    <form method="POST" target="/new-entry" className="card card-body">

    
        <div className="text-left p-5 " >
            <label for="title"><h2>Nombre (obligatorio)</h2></label>
            <input name="Nombre" type="text" className="form-control"  autofocus required/>
          </div>


      <div className="text-left p-5" >
        <label for="Email"><h2>Correo electrónico (obligatorio)</h2></label>
        <input name="Email" type="email" className="form-control"  autofocus required/>
      </div>


      <div className="text-left p-5" >
        <label for="Asunto"><h2>Asunto</h2></label>
        <input name="Asunto" type="text" className="form-control"  autofocus />
      </div>



      <div className="text-left p-5" >
        <label for="Mensaje"><h2>Tu mensaje </h2></label>
        <textarea name="Mensaje" className="form-control" rows="3" autofocus></textarea>
        </div>

    </form>

  </div>
  );
}

export

default Contacto;
