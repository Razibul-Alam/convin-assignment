
import React,{useState,useEffect} from 'react';
import {Button, Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const SingleUser = () => {
    const[user,setUser]=useState({})
    const[value,setValue]=useState({})
    const{userId}=useParams()
    console.log(userId)
    useEffect(()=>{
     fetch(`https://reqres.in/api/users/${userId}`)
     .then(res=>res.json())
     .then(data=>setUser(data.data))
    },[userId])
    console.log(user)
    return (
      <>
     {userId&&<div className='mt-5 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={user?.avatar} />
  <Card.Body>
    <Card.Title>{user?.first_name}</Card.Title>
    <Card.Title>{user?.last_name}</Card.Title>
    <Card.Title>{user?.email}</Card.Title>
  </Card.Body>
</Card>
       </div>}
       </>
       
    );
};

export default SingleUser;