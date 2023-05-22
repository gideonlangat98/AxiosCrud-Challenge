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
            <form onSubmit={handleSubmit} className='my-4'>
                <input type='text' value={name}
                 placeholder='Name' 
                 onChange={(e) => setName(e.target.value)} 
                 className='border border-gray rounded-md p-2'
                />
                
                <input type='text' value={email}
                 placeholder='Email' 
                 onChange={(e) => setEmail(e.target.value)}
                 className='border border-gray-400 rounded-md p-2' 
                />
                <button type='submit' className='border border-gray-400 rounded-md px-4 py-2'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Form
