
import './App.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'

import axios from 'axios'

import PhoneDetails from './component/PhoneDetails'

function App() {
  
    //estados iniciales de la lista y de los componentes a enseñar
    const [ phoneList, setPhoneList ] = useState(null)
    const [ showDetailsPhone, setshowDetailsPhone ] = useState(false)
  
    const navigate = useNavigate()
  
    // hacer la lista de telefonos
    useEffect(() => {
      getAllphones()
    }, [])
    
    const getAllphones = async () => {
      try {
  
        const response = await axios.get("http://localhost:5005/phones")
        setPhoneList(response.data)
  
      } catch (error) {
        navigate("/error")
      }
    }
  
    //handleshow para enseñar el componente de detalles
    const handleShowdetailsPhone = ()=> {
      setshowDetailsPhone(!showDetailsPhone)
    }
  
     //spinner de espera
    if (phoneList === null) {
      return <CircleLoader />
    }
  
    return (
      <div className="App">
        <p>jajdfeayh</p>
        <ul>
          <li onClick={handleShowdetailsPhone}>
           <p>{phoneList.name}</p> <br />
            <span>{showDetailsPhone === true && <PhoneDetails id={phoneList.id}/>}</span> 
          </li>
        </ul>
      </div>
    )

export default App;
