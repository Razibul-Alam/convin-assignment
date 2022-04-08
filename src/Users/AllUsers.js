import React, {useState, useEffect} from 'react';
import { Button, Row,Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../Redux-Features/UsersSlice';
import SingleUser from '../SingleUser/SingleUser';
const AllUsers = ({category}) => {
    const[initialization,setInitialization]=useState(true)
      let users = useSelector((state) =>state.users.allUsers)
      console.log(users)
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <>
         {(users?.length===0)&&<div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="danger" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>}
        <div className='container my-5'>
            {(users?.length!==0)&&<h3 className='text-center mb-3'>Click button for details</h3>}
            <Row xs={1} md={6} className="g-4 mt-3">
           {users?.map(user=> <Link to={`/user/${user.id}`}><Button variant="outline-primary">{user.id}. {user.first_name}</Button></Link>)}
        </Row>
        <SingleUser/>
        </div>
        </>
    );
};

export default AllUsers;