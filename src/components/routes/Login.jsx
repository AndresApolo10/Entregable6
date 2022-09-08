import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogout'

const Login = () => {

  const [isLooged, setIsLooged] = useState()

  useEffect(() => {
    setIsLooged(localStorage.getItem('token'))
  }, [])

  return (
    <main className='login'>
      {
        isLooged ?
          <FormLogout setIsLooged={setIsLooged} isLooged={isLooged} />
        :
          <FormLogin setIsLooged={setIsLooged} />
      }
    </main>
  )
}

export default Login