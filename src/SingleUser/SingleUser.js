
import React,{useState,useEffect} from 'react';
import {Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const SingleUser = () => {
    const[user,setUser]=useState({})
    const{userId}=useParams()
    console.log(userId)
    useEffect(()=>{
     fetch(`https://reqres.in/api/users/${userId}`)
     .then(res=>res.json())
     .then(data=>setUser(data.data))
    },[userId])
    const{first_name,last_name,avatar,email}=user
    console.log(user)
    return (
       <div className='d-flex justify-content-center aling-items-center'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={avatar} />
  <Card.Body>
    <Card.Title>{first_name}</Card.Title>
    <Card.Title>{last_name}</Card.Title>
    <Card.Title>{email}</Card.Title>
  </Card.Body>
</Card>
       </div>
    );
};

export default SingleUser;