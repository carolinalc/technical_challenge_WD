import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { CircleLoader } from 'react-spinners'

function PhoneDetails(props) {

  // estado inicial de los detalles, id que viene del parametro
  const [ detailsPhone, setDetailsPhone ] = useState(null)

  const { id } = props.id

  const navigate = useNavigate()

  //obtener los detalles de un telefono por su id
  useEffect(()=> {
    getdetailsPhone()
  }, [])

  const getdetailsPhone = async () => {
    try {

      const response = await axios.get(`http://localhost:5005/phones/${id}`)
      setDetailsPhone(response.data)
       
    } catch (error) {
      navigate("/error")
    }
  }

  //spinner de espera
  if(detailsPhone === null){
    return <CircleLoader />
  }


  return (
    <div>
      <span>
        <ul>
          <li>Description: {detailsPhone.description}</li>
          <li>Color: {detailsPhone.color}</li>
          <li>Price: {detailsPhone.price}$</li>
        </ul>
      </span>
    </div>
  )
}

export default PhoneDetails