import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'

import getAllPhonesService from '../../services/phones.services'

import PhoneDetails from '../component/PhoneDetails'

function PhonesList() {

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

      const response = await getAllPhonesService()
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
    <div>
      <ul>
        <li onClick={handleShowdetailsPhone}>
         <p>{phoneList.name}</p> <br />
          <span>{showDetailsPhone === true && <PhoneDetails />}</span> 
        </li>
      </ul>
    </div>
  )
}

export default PhonesList