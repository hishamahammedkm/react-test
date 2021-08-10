import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/slices/authSlice'
import React from 'react'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchUsers())
        
    }, [])

    return (
        <div>
            home
        </div>
    )
}

export default Home
