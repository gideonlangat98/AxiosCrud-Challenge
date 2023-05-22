import React, { useState } from 'react'
import axios from 'axios';

function Form ({onAddUser}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const post = { name: name, email: email }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users',
       post);

      const data = response.data
      onAddUser(data);
      setName('');
      setEmail('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <p className='font-bold'>CRUD with Axios and React</p>
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name}
                 placeholder='Name' 
                 onChange={(e) => setName(e.target.value)} 
                />
                
                <input type='text' value={email}
                 placeholder='Email' 
                 onChange={(e) => setEmail(e.target.value)} 
                />
                <button type='submit'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Form
