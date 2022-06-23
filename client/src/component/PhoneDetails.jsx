import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import getPhoneDetailsService from '../../services/phones.services'

import { CircleLoader } from 'react-spinners'

function PhoneDetails() {

  // estado inicial de los detalles, id que viene del parametro
  const [ detailsPhone, setDetailsPhone ] = useState(null)

  const { id } = useParams()

  const navigate = useNavigate()

  //obtener los detalles de un telefono por su id
  useEffect(()=> {
    getdetailsPhone()
  }, [])

  const getdetailsPhone = async () => {
    try {

      const response = await getPhoneDetailsService(id)
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