import { useEffect, useDispatch } from 'react'
import { fetchUsers } from '../store/slices/authSlice'
import React from 'react'
const Home = () => {
   const dispatch = useDispatch()
   useEffect(() => {
     dispatch(fetchUsers())
   }, [])

    return (
        <div>
            Homeeee
        </div>
    )
}

export default Home
