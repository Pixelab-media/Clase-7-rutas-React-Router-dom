import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario() {

  const [id, setId ] = useState("")
  const [name, setName ] = useState("")
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/contacto/${id}/${name}`)
  }
  const handleChange = (e) => {
    setId(e.target.value)
  }
  const handleChangeN = (e) => {
    setName(e.target.value)
  }
  // console.log("idFromulario", id)
 

  return (
    <div>
      <input 
      type="number"
      value={id}
      onChange={handleChange}
      />
      <input 
      type="text"
      value={name}
      onChange={handleChangeN}
      />
      <button onClick={handleClick}>registrar</button>
    </div>
  );
}

export default Formulario;