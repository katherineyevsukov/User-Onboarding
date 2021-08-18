import React from 'react';

function User({ user }){
// if (!user) {
//     return <h3>Trying to fetch users...</h3>
// }

return (
    <div className='user-container'>
        <h4>{user.name ? user.name : user.first_name}</h4>
        <p>{user.email}</p>
    </div>
)

}




export default User