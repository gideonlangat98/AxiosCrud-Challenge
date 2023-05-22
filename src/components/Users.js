import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = response.data;
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleUpdateUser(newUser){
        setUsers([...users, newUser])
    }


  return (
    <div>
        <Form onAddUser={handleUpdateUser} />
        <div>
            <table className='mx-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
        
    </div>
  )
}

export default Users
