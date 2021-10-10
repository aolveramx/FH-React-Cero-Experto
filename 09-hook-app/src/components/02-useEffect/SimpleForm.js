import { useEffect, useState } from 'react'
import Message from './Message'

import './effects.css'

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState

  useEffect(() => {
    // console.log('hey!')
  }, [])
// 
  useEffect(() => {
    // console.log('Form state cambió')
  }, [formState])

  useEffect(() => {
    // console.log('email cambió')
  }, [email])

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input 
          type="text"
          name="name"
          className="form-control" 
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text"
          name="email"
          className="form-control" 
          placeholder="email@..."
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name === '123') && <Message />}
    </div>
  )

}

export default SimpleForm
