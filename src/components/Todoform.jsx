import React from 'react'

const Todoform = () => {
    return (
        <form className='Todoform'>
            <input type='text' className='placeholder-pink-600' placeholder="Today's Task?" ></input>
            <button type='submit' className='Todo-btn'></button></form>
    )
}

export default Todoform