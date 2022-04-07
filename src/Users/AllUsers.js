import React, { useEffect} from 'react';
import { Button, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../Redux-Features/UsersSlice';
const AllUsers = ({category}) => {
      let users = useSelector((state) =>state.users.allUsers)
      console.log(users)
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return (
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4 mt-3">
           {users?.map(user=> <Link to={`/user/${user.id}`}><Button variant="outline-primary">{user.id}</Button></Link>)}
        </Row>
        </div>
    );
};

export default AllUsers;